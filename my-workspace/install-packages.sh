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
