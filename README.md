# BGNix - 100% Free & Privacy Image Background Removal

![og-1738509722567 (1)](https://github.com/user-attachments/assets/e704a58f-083f-446a-bedf-edf2c67f22cb)

BGNix is a free, privacy-first AI tool that removes backgrounds instantly – no subscriptions, no uploads to any server. 100% Local Processing.

## Features

- 🎯 One-click background removal for images
- 🏃‍♂️ Local processing - no server uploads needed
- 🔒 Privacy-focused - all processing happens in your browser
- ⚡ Optional WebGPU acceleration for supported browsers
- 🌍 Support English, Japanese, Chinese
- 📱 Support iOS, Android, and Web

## Todo

- [ ] Support RMBG-2.0 model

## Technical Implementation

The app implements a cross-browser approach to background removal with optional WebGPU acceleration:

### Default Implementation (All Browsers)
- Uses [RMBG-1.4](https://huggingface.co/briaai/RMBG-1.4), a robust background removal model
- Ensures consistent performance across all modern browsers
- Processes images efficiently using WebAssembly

### Optional WebGPU Acceleration
- For browsers with WebGPU support, offers [MODNet](https://huggingface.co/Xenova/modnet) as an alternative
- Can be enabled through a dropdown when WebGPU is available
- Leverages GPU acceleration for potentially faster processing

Both implementations use Transformers.js to run the machine learning models directly in the browser, eliminating the need for server-side processing.

## How It Works

1. **File Selection**: Upload any image file
2. **Model Selection**: 
   - By default, uses RMBG-1.4 for maximum compatibility
   - If WebGPU is available, offers option to switch to MODNet
3. **Background Removal**: The selected ML model processes your media, creating an alpha mask
4. **Customization**: Choose a custom background color, image or keep transparency
5. **Export**: Download your processed media with either transparent or colored background

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/thinkingjimmy/bg-remove.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Browser Support

- **Default Experience**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Optional WebGPU**: Available in browsers with WebGPU support (Chrome Canary with WebGPU flags enabled)

## Technical Stack

- React + Vite for the frontend framework
- Transformers.js for ML model inference
- RMBG-1.4 as the default cross-browser model
- Optional WebGPU acceleration with MODNet
- IndexedDB (via Dexie.js) for local file management
- TailwindCSS and shadcn/ui for styling

## Credits

- Based on the [bg-remove](https://github.com/addyosmani/bg-remove) by [@addyosmani](https://github.com/addyosmani)

## License

MIT License - feel free to use this in your own projects!
