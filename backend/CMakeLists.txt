cmake_minimum_required(VERSION 3.16)
project(youtube_like_backend LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Drogon CONFIG REQUIRED)

add_executable(youtube_like_backend src/main.cc)
target_link_libraries(youtube_like_backend PRIVATE Drogon::Drogon)
