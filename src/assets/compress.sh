#!/bin/sh

echo "WARNING: This script will delete your original video files."
echo "Press Enter to continue, or Ctrl+C to cancel."
read reply

# Find all compressed video files
find . -type f -name "*-compressed.*" | while read -r compressed_file; do
  
  # Construct the original filename using sed for string replacement
  original_file=$(echo "$compressed_file" | sed 's/-compressed//')
  
  # Check if the original file exists before proceeding
  if [ -f "$original_file" ]; then
    
    echo "Processing:"
    echo "  Original: $original_file"
    echo "  Compressed: $compressed_file"
    
    # 1. Delete the original file
    echo "  Deleting original file..."
    rm "$original_file"
    
    # Check if the deletion was successful before moving the new file
    if [ $? -eq 0 ]; then
      
      # 2. Rename the compressed file to the original filename
      echo "  Renaming compressed file..."
      mv "$compressed_file" "$original_file"
      
      echo "  Replacement complete."
      echo "-----------------------------------"
    else
      echo "  ERROR: Failed to delete original file. Skipping..."
      echo "-----------------------------------"
    fi
  else
    echo "WARNING: Original file not found for $compressed_file. Skipping..."
    echo "-----------------------------------"
  fi
  
done

echo "Script finished."