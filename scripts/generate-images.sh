#!/bin/bash
# Generate all placeholder images for Beaconherm website
set -e

PUBLIC_DIR="/workspace/projects/public"
echo "Starting image generation..."

# Hero images
echo "=== Generating hero images ==="
coze-coding-ai image --prompt "A premium camping tent pitched on a rocky mountain ridge at golden hour, with snow-capped peaks in the background, warm sunset light, cinematic outdoor photography, national park quality, ultra realistic" --output "$PUBLIC_DIR/hero/hero-mountain-camp.jpg" --size 2560x1440
echo "✓ Hero mountain camp"

coze-coding-ai image --prompt "Sunlight filtering through tall pine trees in a dense forest, soft god rays, peaceful forest atmosphere, cinematic nature photography, green and gold tones" --output "$PUBLIC_DIR/hero/cta-forest.jpg" --size 2560x1440
echo "✓ CTA forest"

# Tent product images
echo "=== Generating tent product images ==="
coze-coding-ai image --prompt "An ultralight two-person backpacking tent in olive green, pitched on a bare alpine mountain ridge with rocky terrain, clear blue sky, professional product lifestyle shot, sharp focus, modern outdoor gear photography" --output "$PUBLIC_DIR/tents/summit-pro-2p.jpg" --size 2560x1920
echo "✓ Summit Pro 2P"

coze-coding-ai image --prompt "Interior view of a two-person backpacking tent, looking out through mesh screen at mountain landscape, golden hour light, cozy camping atmosphere, realistic detail" --output "$PUBLIC_DIR/tents/summit-pro-2p-interior.jpg" --size 2560x1920
echo "✓ Summit Pro interior"

coze-coding-ai image --prompt "A large four-person family camping tent in forest green with a front porch awning, pitched at a sunny grassy campsite surrounded by pine trees, camping chairs outside, warm daylight, professional product photography" --output "$PUBLIC_DIR/tents/evergreen-family-4p.jpg" --size 2560x1920
echo "✓ Evergreen Family 4P"

coze-coding-ai image --prompt "Interior of a spacious family camping tent, people sitting inside, camping gear visible, warm ambient light, high ceiling, realistic and welcoming" --output "$PUBLIC_DIR/tents/evergreen-family-4p-living.jpg" --size 2560x1920
echo "✓ Evergreen interior"

coze-coding-ai image --prompt "A rugged four-season expedition tent in dark olive green, geodesic dome shape, pitched on a snowy alpine slope with mountains in background, dramatic stormy sky, mountaineering gear nearby, professional outdoor photography" --output "$PUBLIC_DIR/tents/northridge-expedition-3p.jpg" --size 2560x1920
echo "✓ Northridge Expedition"

coze-coding-ai image --prompt "A geodesic dome expedition tent covered in fresh snow on a mountain ridge, blizzard conditions, dramatic alpine landscape, cold blue tones, realistic winter mountaineering scene" --output "$PUBLIC_DIR/tents/northridge-expedition-3p-snow.jpg" --size 2560x1920
echo "✓ Northridge snow"

coze-coding-ai image --prompt "An ultralight single-person trekking pole tent in sage green, pitched in a remote backcountry meadow with wildflowers, mountain backdrop, golden hour sunlight, minimalist and light, professional backpacking photography" --output "$PUBLIC_DIR/tents/trailblazer-1p.jpg" --size 2560x1920
echo "✓ Trailblazer 1P"

coze-coding-ai image --prompt "A large luxury cabin-style six-person tent in dark green, pitched at a scenic campground by a lake, sunset reflection on water, string lights inside, cozy family camping atmosphere, wide angle shot" --output "$PUBLIC_DIR/tents/basecamp-cabin-6p.jpg" --size 2560x1920
echo "✓ Basecamp Cabin 6P"

coze-coding-ai image --prompt "A compact single-pole bivy shelter in dark grey, pitched on a rocky mountain summit at dawn, minimalist and lightweight, dramatic cliffside location, alpine start atmosphere" --output "$PUBLIC_DIR/tents/skyview-bivy.jpg" --size 2560x1920
echo "✓ SkyView Bivy"

# About page images
echo "=== Generating about page images ==="
coze-coding-ai image --prompt "A diverse team of four outdoor people setting up tents together at a mountain basecamp at sunrise, wearing hiking gear, teamwork atmosphere, scenic alpine environment, warm golden light, documentary style photography" --output "$PUBLIC_DIR/about/about-hero.jpg" --size 2560x1440
echo "✓ About hero"

coze-coding-ai image --prompt "A middle-aged man with a beard wearing outdoor gear standing on a mountain ridge with a breathtaking valley view, thoughtful expression, natural lighting, portrait of a mountain guide and tent designer, cinematic portrait photography" --output "$PUBLIC_DIR/about/founder-story.jpg" --size 1920x2400
echo "✓ Founder story"

# Team avatars
echo "=== Generating team member avatars ==="
coze-coding-ai image --prompt "Professional headshot portrait of a middle-aged man with a salt-and-pepper beard, wearing a dark green flannel shirt, outdoorsy and friendly expression, natural soft lighting, plain neutral background, high quality portrait photography" --output "$PUBLIC_DIR/team/marcus-hale.jpg" --size 1024x1024
echo "✓ Marcus Hale"

coze-coding-ai image --prompt "Professional headshot portrait of a hispanic woman in her 30s with dark hair pulled back, wearing a technical outdoor jacket, confident and intelligent expression, natural lighting, plain neutral background, high quality portrait" --output "$PUBLIC_DIR/team/elena-rodriguez.jpg" --size 1024x1024
echo "✓ Elena Rodriguez"

coze-coding-ai image --prompt "Professional headshot portrait of a middle-aged man with short greying hair and weathered skin, wearing a faded baseball cap and hiking shirt, rugged and experienced expression, natural lighting, plain neutral background, portrait photography" --output "$PUBLIC_DIR/team/jim-carter.jpg" --size 1024x1024
echo "✓ Jim Carter"

coze-coding-ai image --prompt "Professional headshot portrait of a south asian woman in her 30s with long dark hair, wearing a sage green sweater, warm and thoughtful expression, natural soft lighting, plain neutral background, high quality portrait photography" --output "$PUBLIC_DIR/team/priya-patel.jpg" --size 1024x1024
echo "✓ Priya Patel"

# Contact page image
echo "=== Generating contact page images ==="
coze-coding-ai image --prompt "Boulder Colorado flatirons rock formations at golden hour, red sandstone cliffs with green trees at the base, clear blue sky with wispy clouds, iconic Colorado landscape, wide panoramic view" --output "$PUBLIC_DIR/contact/boulder-skyline.jpg" --size 2560x1024
echo "✓ Boulder skyline"

# OG image
echo "=== Generating OG image ==="
coze-coding-ai image --prompt "A premium green tent pitched on a mountain meadow at sunset with dramatic mountain range in background, warm golden light, inspirational outdoor scene, high quality landscape photography, wide composition" --output "$PUBLIC_DIR/og/hero.jpg" --size 1200x630
echo "✓ OG hero"

echo ""
echo "=== All images generated successfully! ==="
