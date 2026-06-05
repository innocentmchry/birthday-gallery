import os

# Supported image extensions
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp'}

def rename_photos():
    # Current directory
    folder_path = os.getcwd()

    # Get all image files
    image_files = [
        f for f in os.listdir(folder_path)
        if os.path.isfile(f)
        and os.path.splitext(f)[1].lower() in IMAGE_EXTENSIONS
    ]

    # Sort files for consistent numbering
    image_files.sort()

    # First rename to temporary names to avoid conflicts
    temp_files = []
    for i, filename in enumerate(image_files):
        ext = os.path.splitext(filename)[1].lower()
        temp_name = f"__temp_{i}{ext}"
        os.rename(filename, temp_name)
        temp_files.append(temp_name)

    # Rename to final names
    for i, temp_name in enumerate(temp_files, start=1):
        ext = os.path.splitext(temp_name)[1].lower()
        new_name = f"photo{i}{ext}"
        os.rename(temp_name, new_name)
        print(f"{temp_name} -> {new_name}")

if __name__ == "__main__":
    rename_photos()
