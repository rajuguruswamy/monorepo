## 1. create project Structure
mkdir myworkspce && cd myworkspce
npm init -y

## 2. root package.json
{
  "name": "my-workspace",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
}

## 3. setting up project1 and projct2
mkdir packages/project1 
cd packages/project1 && npm init -y
npm install express, lodashto
touch index.js
## create a api using express and expose port 3001
## update package.json start script
"start": "node index.js"

## 4. setting up packages/project2
mkdir packages/project2
cd packages/project2 && npm init -y
npm install express, morgan
touch index.js
## create a api using express and expose port 3002
## update package.json start script
"start": "node index.js"

## 5. setting up packages/mathlib
mkdir packages/mathlib
cd packages/mathlib && npm init -y
touch index.js
create add, subtract,multiply and divide function
update mathlib/package : add following field to identidy matlib as workspace package
{
"name": "@workspace/mathlib",
  "version": "1.0.0",
  "main": "index.js",
}
## import mathlib to project1 and project2
npm install @workspace/mathlib --workspace=packages/project1
npm install @workspace/mathlib --workspace=packages/project2

## implement add method in priject 1 and multiply methods in project

## 5 start both API
cd my-workspace\packages\project1 && npm run start
cd my-workspace\packages\project2 && npm run start

## add new method  to mathlib and change versio 1.1.0
create a new mathod called power in packages/mathlib/index.js and export the function
update the package version 1.0.0 to 1.1.0

 
## To update the linked dependency accross all project 
### add following code to root package.json
"scripts": {
    "update-lib": "npm install @workspace/mathlib --workspaces"
  },

  ### run following command to update latest version of library
  npm run update-lib


## 5. create a new project under library/mathutil
mkdir library/mathutil
cd library/mathutil && npm init -y
touch index.js

<!-- import mathutil to project1 -->
npm install @library/mathutil --workspace=packages/project1

## To update the linked dependency accross all project 
"update-lib": "npm install @workspace/mathlib @library/mathutil --workspaces"


## create bash script to install latest libraries

#!/bin/bash

# Define an array with the npm commands
commands=(
    "npm install @workspace/mathlib --workspace=packages/project1"
    "npm install @workspace/mathlib --workspace=packages/project2"
    "npm install @library/mathutil --workspace=packages/project1"
)

# Loop through the array and execute each command
for cmd in "${commands[@]}"; do
    echo "Executing: $cmd"
    eval $cmd
done

echo "All installations completed!"

## grant permission
chmod +x install-packages.sh

## run bash script to update 
./install-packages.sh
