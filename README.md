
# Video Hub

**An intuitive YouTube like platform for seamless Video Uploading, Streaming, and Sharing.**

## Features

- **Video Uploading**: Upload videos directly from your browser.
- **Video Streaming**: Stream uploaded videos seamlessly.
- **Responsive Design**: Enjoy a clean, responsive interface that works on all devices.
- **Custom Video Player**: A custom-built video player with play/pause controls and a progress bar.
- **Aspect Ratio Maintenance**: Ensures videos maintain their aspect ratio regardless of the device.

## Architecture

The application follows a modern web development architecture:

- **Next.js**: React framework for server-side rendering and generating static websites.
- **API Routes**: Used Nextjs 14 Server Actions to handle video file uploads and streaming.
- **Formidable**: Middleware for parsing form data, especially for file uploads.
- **Node.js**: Handles the server-side operations and file system interactions.
- **CSS Modules**: Scoped CSS for component-level styling.

## Installation

To get started with VidHub, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/M-Hassan-Malik/video-hub.git
    cd video-hub
    ```

2. **Install dependencies**:
    ```sh
    yarn
    ```

3. **Run the development server**:
    ```sh
    yarn run dev
    ```

4. **Build for production**:
    ```sh
    # Beta
    yarn run build
    yarn start
    ```

## How to Use

1. **Upload a Video**:
    - Navigate to the upload page.
    - Choose a video file from your device and upload it.
    - The video will be saved in the `public/video` directory.

2. **Stream a Video**:
    - Navigate to the home page or video library.
    - Click on any video to start streaming it in the custom video player.

3. **View Video Player**:
    - The video player maintains the aspect ratio and provides controls for play, pause, and progress tracking.

## Contact

**Muhammad Hassan Malik** - mhassan.malik.1997@gmail.com
LinkedIn - https://www.linkedin.com/in/m-hmalik
Project Link: [https://github.com/M-Hassan-Malik/video-hub](https://github.com/yourusername/video-hub)
## Acknowledgements

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Your Inspiration](http://example.com)
- [Readme Template](https://github.com/othneildrew/Best-README-Template)

