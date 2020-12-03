for file in *.jpg
do convert $file -resize 25% -unsharp 0x1 $file
done
