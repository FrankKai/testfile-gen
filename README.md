[中文简体](./README-zh.md)

# testfile-gen
When there is a need for file uploads, constraints on file size and file type are common requirements. However, quickly generating a file of a specified size can be challenging. This is precisely the problem that testfile-gen addresses.

## Feature
- Quickly generate a file with specified size, filename, and output path.
- Support KB、MB、GB

## Install

```js
yarn add -D testfile-gen
```

## Usage

```js
testfile-gen -s 2KB -n myFile.txt -p ./output
testfile-gen -s 5.5MB -n myFile.txt -p ./output
testfile-gen -s 1GB -n myFile.txt -p ./output
```

```js
testfile-gen --size 2KB --name myFile.txt --path ./output
testfile-gen --size 5.5MB --name myFile.txt --path ./output
testfile-gen --size 1GB --name myFile.txt --path ./output
```