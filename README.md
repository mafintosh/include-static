# include-static

Inlines file contents to a c/c++ header file

```
npm install -g include-static
```

## Usage

```
include-static name file.ext output.h

# or if you have multiple ones

include-static name1 file1.ext name2 file2.ext output.h
```

Produces a header file similar to this

```
unsigned char name1[] = {
  ... content ...
};

size_t name1_len =  ... contentLength ...;
```

## License

MIT
