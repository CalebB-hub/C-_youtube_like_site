#include <drogon/drogon.h>

int main() {
  drogon::app()
      .registerHandler("/api/health", [](const drogon::HttpRequestPtr&,
                                           std::function<void(const drogon::HttpResponsePtr&)>&& callback) {
        auto response = drogon::HttpResponse::newHttpResponse();
        response->setStatusCode(drogon::k200OK);
        response->setContentTypeCode(drogon::CT_APPLICATION_JSON);
        response->setBody(R"({"status":"ok","service":"youtube-like-backend"})");
        callback(response);
      })
      .addListener("0.0.0.0", 8080)
      .run();
}
