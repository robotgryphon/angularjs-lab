#!/bin/bash

# Before running this, you must have installed npm (with Node.js) and
# MongoDB.

# Make sure npm is installed
if ! (npm --version >/dev/null 2>&1) ; then
  echo "npm wasn't found. Make sure npm is installed and in your path and try again." >&2
  exit 2
fi

# Create the Northwind Database
./loadMongoCSVFiles.bash
if (( $? != 0 )) ; then
  exit 3
fi

# Run npm install for the webserver
cd ../../
npm install

# Run npm install for the app
cd app
npm install

echo ""
echo "Installation was successful."
echo ""
