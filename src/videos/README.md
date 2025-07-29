# Video Demos Directory

This directory contains demo videos for the portfolio website.

## Directory Structure

```
videos/
├── demos/           # Demo video files (MP4 format recommended)
├── thumbnails/      # Video thumbnails/screenshots
├── config/          # Video metadata and configuration
└── README.md        # This file
```

## Video Requirements

### Format
- **Recommended**: MP4 with H.264 codec
- **Resolution**: 720p or 1080p max for portfolio demos
- **File Size**: Keep under 10MB for optimal loading
- **Duration**: 30 seconds to 2 minutes for best engagement

### Naming Convention
- Use descriptive names: `project-name-demo.mp4`
- Avoid spaces, use hyphens: `data-pipeline-demo.mp4`
- Include version if needed: `v1-demo.mp4`

## Thumbnails

### Requirements
- **Format**: JPG or PNG
- **Size**: 400x300px minimum
- **Quality**: High quality, clear representation of video content
- **Naming**: Match video filename: `project-name-demo-thumb.jpg`

## Adding New Demos

1. **Upload video** to `videos/demos/`
2. **Create thumbnail** and place in `img/portfolio/thumbnails/demos/`
3. **Update HTML** in `index.html` with new demo item
4. **Test** video playback and download functionality

## Example Demo Item HTML

```html
<li class="demos col-xs-6 col-sm-4 col-md-3 col-lg-3">
    <div class="item">
        <img src="img/portfolio/thumbnails/demos/your-demo-thumb.jpg" alt="Your Demo">
        <div class="icons">
            <a href="videos/demos/your-demo.mp4" title="Watch Demo" class="openVideo" data-fancybox data-type="video" data-caption="Your Demo Description">
                <i class="fa fa-play"></i>
            </a>
            <a href="videos/demos/your-demo.mp4" download class="downloadVideo" title="Download Demo">
                <i class="fa fa-download"></i>
            </a>
        </div>
        <div class="imageOverlay"></div>
    </div>
</li>
```

## Performance Tips

- **Compress videos** before uploading
- **Use CloudFront** for faster global delivery
- **Create multiple qualities** for different devices
- **Optimize thumbnails** for web display
- **Test on mobile** devices

## Supported Features

- ✅ Video playback in lightbox
- ✅ Direct download functionality
- ✅ Responsive design
- ✅ Loading states
- ✅ Mobile optimization
- ✅ Keyboard navigation