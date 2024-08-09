# TO-DO-LIST

This project demonstrates a simple web server using the Crow C++ framework. The server serves an HTML page along with associated CSS and JavaScript files.

## Prerequisites

- C++ compiler with at least C++11 support (e.g., `g++`)
- Asio development headers (1.10.9 or later)
- Crow framework

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/bikundkumar/Clock.git
    ```
2. Ensure you have the Crow framework header file (`crow_all.h`) and Asio development headers in the project directory.

## Building and Running

1. Compile the project:
    ```bash
    g++ -I. to-do.cpp -lpthread && ./a.out
    ```

2. Run the server:
    ```bash
    ./a.out
    ```

3. Open your browser and navigate to `http://localhost:18080` to view the served HTML page.

## Routes

- `/` : Serves the main HTML page (`fancypage.html`).
- `/style.css` : Serves the CSS file (`templates/style.css`).
- `/script.js` : Serves the JavaScript file (`templates/script.js`).

## Dependencies

- [Crow](https://github.com/CrowCpp/Crow) - Fast and easy to use C++ microframework

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
