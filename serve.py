import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Keep console output minimal and clean
        sys.stderr.write(f"[Petty Cash Server] {args[0]} - {args[1]}\n")

def start_server():
    global PORT
    while PORT < 8100:
        try:
            with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
                url = f"http://localhost:{PORT}/petty_cash_book_manager.html"
                print("=" * 65)
                print("  PETTY CASH BOOK MANAGER - DESKTOP OFFLINE SERVER")
                print("=" * 65)
                print(f"\n  Running locally at: {url}")
                print("  Camera scanner enabled via localhost security context.")
                print("  To exit, simply close this console window or press Ctrl+C.\n")
                print("=" * 65)
                webbrowser.open(url)
                httpd.serve_forever()
                break
        except OSError:
            PORT += 1

if __name__ == "__main__":
    start_server()

