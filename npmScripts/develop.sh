# Start DB
osascript -e 'tell app "Terminal"
    do script "mongod --dbpath /data/db"
end tell'
