find . -type f \( -iname "*.mp4" -o -iname "*.mov" \) | while read -r file; do
  
  # Extract the directory, filename without extension, and the extension
  dir=$(dirname "$file")
  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename_no_ext="${filename%.*}"
  
  # Construct the output filename
  new_file="$dir/$filename_no_ext-compressed.$extension"
  
  # Check if the compressed file already exists to avoid re-compressing
  if [ -f "$new_file" ]; then
    echo "Skipping: $new_file already exists."
    continue
  fi
  
  echo "Compressing: $file to $new_file"
  
  # Execute the command with the -nostdin and -y flags
  ffmpeg -nostdin -y -i "$file" -c:v libx264 -crf 28 -c:a aac "$new_file"
  
  if [ $? -eq 0 ]; then
    echo "Done with $file"
  else
    echo "Failed to process $file"
  fi

done