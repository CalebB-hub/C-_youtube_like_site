#include <drogon/drogon.h>

int main() {
  drogon::app()
      .registerHandler("/api/health",
                       [](const drogon::HttpRequestPtr&,
                          std::function<void(const drogon::HttpResponsePtr&)>&& callback) {
        auto response = drogon::HttpResponse::newHttpResponse();
        response->setStatusCode(drogon::k200OK);
        response->setContentTypeCode(drogon::CT_APPLICATION_JSON);
        response->setBody(R"({"status":"ok","service":"youtube-like-backend"})");
        callback(response);
      },
                       {drogon::Get})
      .addListener("127.0.0.1", 8080)
      .run();
}
