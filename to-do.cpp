#include <crow_all.h>
using namespace std;
int main() {

  crow:: SimpleApp app;

  CROW_ROUTE(app, "/")([](){
      auto page = crow::mustache::load_text("fancypage.html");
      return page;
  });

   CROW_ROUTE(app, "/style.css")([](){
        ifstream in("templates/style.css", ios::in | ios::binary);
        if (in) {
            string contents((istreambuf_iterator<char>(in)), istreambuf_iterator<char>());
            return crow::response(contents);
        } else {
            return crow::response(404);
        }
    });

   CROW_ROUTE(app, "/script.js")([](){
        ifstream in("templates/script.js", ios::in | ios::binary);
        if (in) {
            string contents((istreambuf_iterator<char>(in)), istreambuf_iterator<char>());
            return crow::response(contents);
        } else {
            return crow::response(404);
        }
    });


  app.port(18080).multithreaded().run();
}