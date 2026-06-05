import os

# Image extensions to rename
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp'}

# Get all image files in the current directory
image_files = [
    f for f in os.listdir('.')
    if os.path.isfile(f)
    and os.path.splitext(f)[1].lower() in IMAGE_EXTENSIONS
]

# Sort files for consistent numbering
image_files.sort()

# Rename to temporary names first to avoid conflicts
temp_files = []
for i, filename in enumerate(image_files):
    temp_name = f"__temp__{i}"
    os.rename(filename, temp_name)
    temp_files.append(temp_name)

# Rename to photo1.jpg, photo2.jpg, ...
for i, temp_name in enumerate(temp_files, start=1):
    new_name = f"photo{i}.jpg"
    os.rename(temp_name, new_name)
    print(f"Renamed to {new_name}")

print(f"Done! Renamed {len(temp_files)} files.")
