[English](./README.md)

# testfile-gen
当我们有上传文件的需求时，对于文件大小，文件类型的限制是非常常见的需求，但是快速找到指定大小的文件，仿佛又比较困难，这就是testfile-gen解决的问题。

## 特性
- 快速构建 指定文件大小、文件名、生成路径位置 的文件
- 支持KB、MB、GB

## 安装

```js
npm install -g testfile-gen
```

## 使用

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


