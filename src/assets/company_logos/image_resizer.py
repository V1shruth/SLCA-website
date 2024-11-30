import cv2, numpy as np


def resize_with_padding(image, target_size):
    target_width, target_height = target_size

    # Calculate aspect ratios
    aspect_ratio_target = target_width / target_height
    aspect_ratio_image = image.shape[1] / image.shape[0]

    # Determine scaling factor
    if aspect_ratio_image > aspect_ratio_target:
        scale = target_width / image.shape[1]
    else:
        scale = target_height / image.shape[0]

    # Resize image
    new_width = int(image.shape[1] * scale)
    new_height = int(image.shape[0] * scale)
    resized_image = cv2.resize(
        image, (new_width, new_height), interpolation=cv2.INTER_LANCZOS4
    )

    # Create canvas of target size
    canvas = np.zeros((target_height, target_width, 3), dtype=np.uint8)

    # Calculate position to paste resized image
    x_offset = (target_width - new_width) // 2
    y_offset = (target_height - new_height) // 2

    # Place resized image on canvas
    canvas[y_offset : y_offset + new_height, x_offset : x_offset + new_width] = (
        resized_image
    )

    return canvas


img_name = "Chipotle"
image = cv2.imread(f"src/assets/company_logos/{img_name}.jpg")
target_size = (1000, 500)  # Desired width and height
output_img = resize_with_padding(image, target_size)
cv2.imwrite(f"src/assets/company_logos/{img_name} Resized.jpg", output_img)
