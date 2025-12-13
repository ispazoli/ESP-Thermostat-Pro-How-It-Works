# ESP Thermostat Pro – How It Works

This project documents a **custom-built ESP32-based heating controller**
designed for real-world gas boiler control.

The system uses a **dual-controller architecture**:
- **ESP32 Dev Module** as the main controller and web interface
- **ESP-01 (ESP8266)** as a remote relay unit controlling the gas boiler

Temperature feedback is provided by:
- **DHT sensor** on the ESP32 (room air temperature)
- **DS18x20 sensor** on the ESP-01 (boiler-side reference)

The goal of the project is **reliable, understandable, and safe heating control**,
without external cloud dependency for core operation.

---

## 📖 Documentation Website (GitHub Pages)

A full, illustrated explanation of the system is available as a **static documentation site**:

👉 **(https://ispazoli.github.io/ESP-Thermostat-Pro-How-It-Works/)**

The documentation explains:
- system architecture and hardware layout
- heating control logic and learning behavior
- safety mechanisms and fallback modes
- web interface structure and diagnostics

⚠️ **Important**  
The GitHub Pages site is a **documentation and demonstration only**.
All live ESP communication, cloud uploads, and control actions are disabled there.

---

## 🧱 Project Structure

```text
/docs        → GitHub Pages documentation (static)
/web-ui      → Live ESP32 web interface files
/src         → ESP32 & ESP-01 firmware source code
