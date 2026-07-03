// app.js — Virtual Programming Laboratory (Multi-Experiment Edition)

// ─── Lab Data ────────────────────────────────────────────────────────────────

var labData = {

    // ═══════════════════════════════════════════════════════════════════════
    // C PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    c: {
        name: "C Programming",
        experiments: [
            {
                title: "Basic I/O and Arithmetic Operations",
                aim: '<p><strong>Objective:</strong> Understand the fundamental structure of a C program including header files, main function, printf/scanf, and arithmetic operations.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Write, compile, and execute a C program.</li><li>Use &lt;stdio.h&gt; for standard I/O.</li><li>Perform arithmetic on integer variables.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Navigate to the Simulation tab.</td></tr><tr><td>2</td><td>Observe the #include &lt;stdio.h&gt; directive.</td></tr><tr><td>3</td><td>Enter two integers in the stdin box (e.g., 15 25).</td></tr><tr><td>4</td><td>Click Run Code and observe the output.</td></tr></tbody></table>',
                pretest: [
                    { q: "Which header is required for printf()?", options: ["&lt;stdlib.h&gt;", "&lt;math.h&gt;", "&lt;stdio.h&gt;", "&lt;string.h&gt;"], a: 2 },
                    { q: "What is the return type of main()?", options: ["void", "int", "float", "char"], a: 1 },
                    { q: "Which format specifier is used for integers?", options: ["%f", "%c", "%d", "%s"], a: 2 },
                    { q: "Which operator gives remainder in C?", options: ["/", "*", "^", "%"], a: 3 },
                    { q: "Single-line comment in C?", options: ["//", "#", "/*", "--"], a: 0 }
                ],
                posttest: [
                    { q: "Output of printf(\"%d\", 5/2) in C?", options: ["2.5", "2", "3", "Error"], a: 1 },
                    { q: "What does & mean in scanf(\"%d\",&a)?", options: ["Logical AND", "Bitwise AND", "Address of", "Value of"], a: 2 },
                    { q: "Valid variable name in C?", options: ["2var", "int", "_count", "my-var"], a: 2 },
                    { q: "Size of int in 32-bit compiler?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], a: 2 },
                    { q: "Format specifier for float?", options: ["%d", "%i", "%f", "%l"], a: 2 }
                ],
                reference: '<ul><li><em>The C Programming Language</em> – Kernighan &amp; Ritchie</li><li><a href="https://en.cppreference.com/w/c" target="_blank">cppreference.com</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter two numbers:\\n");\n    scanf("%d %d", &a, &b);\n    printf("Sum     = %d\\n", a + b);\n    printf("Product = %d\\n", a * b);\n    printf("Difference = %d\\n", a - b);\n    return 0;\n}'
            },
            {
                title: "Control Structures: if-else and switch",
                aim: '<p><strong>Objective:</strong> Learn decision-making using if-else ladders and switch-case statements in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Use if, else if, else for branching.</li><li>Use switch-case for menu-driven programs.</li><li>Understand fall-through behavior in switch.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Go to Simulation tab.</td></tr><tr><td>2</td><td>Enter a number in stdin to test if-else conditions.</td></tr><tr><td>3</td><td>Observe which branch executes.</td></tr><tr><td>4</td><td>Modify the code to test switch-case.</td></tr></tbody></table>',
                pretest: [
                    { q: "Which keyword ends a switch case?", options: ["exit", "end", "break", "stop"], a: 2 },
                    { q: "What executes if no case matches in switch?", options: ["first case", "nothing", "default", "error"], a: 2 },
                    { q: "Is else mandatory with if?", options: ["Yes", "No", "Only in loops", "Depends on compiler"], a: 1 },
                    { q: "Correct syntax for if in C?", options: ["if x > 0:", "if (x > 0)", "if [x > 0]", "if {x > 0}"], a: 1 },
                    { q: "Ternary operator in C?", options: ["if?else:", "a?b:c", "a:b?c", "#if"], a: 1 }
                ],
                posttest: [
                    { q: "Which statement transfers control out of a switch?", options: ["return", "break", "exit", "continue"], a: 1 },
                    { q: "Can switch operate on float in C?", options: ["Yes", "No", "Only double", "Only unsigned"], a: 1 },
                    { q: "Nested if means?", options: ["if inside if", "if with else", "switch inside if", "None"], a: 0 },
                    { q: "Value of x after: if(0) x=1; else x=2;", options: ["0", "1", "2", "undefined"], a: 2 },
                    { q: "Fall-through in switch means?", options: ["break skipped, next case runs", "default runs", "error occurs", "loop continues"], a: 0 }
                ],
                reference: '<ul><li><em>C Programming Absolute Beginner\'s Guide</em> – Dean Miller</li><li><a href="https://www.tutorialspoint.com/cprogramming/c_decision_making.htm" target="_blank">TutorialsPoint – Decision Making</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n\n    if (num > 0)\n        printf("Positive\\n");\n    else if (num < 0)\n        printf("Negative\\n");\n    else\n        printf("Zero\\n");\n\n    switch(num % 2) {\n        case 0: printf("Even\\n"); break;\n        case 1:\n        case -1: printf("Odd\\n"); break;\n    }\n    return 0;\n}'
            },
            {
                title: "Loops: for, while, do-while",
                aim: '<p><strong>Objective:</strong> Understand iteration using for, while, and do-while loops in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Write loops to repeat code blocks.</li><li>Distinguish pre-test (while) from post-test (do-while) loops.</li><li>Use break and continue inside loops.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a positive integer n in stdin.</td></tr><tr><td>2</td><td>Observe for-loop printing 1 to n.</td></tr><tr><td>3</td><td>Observe factorial computed with while-loop.</td></tr><tr><td>4</td><td>Note do-while always executes at least once.</td></tr></tbody></table>',
                pretest: [
                    { q: "Which loop always executes at least once?", options: ["for", "while", "do-while", "None"], a: 2 },
                    { q: "Loop that checks condition before body?", options: ["do-while", "for only", "both for and while", "None"], a: 2 },
                    { q: "Keyword to skip current iteration?", options: ["break", "skip", "continue", "next"], a: 2 },
                    { q: "Infinite loop using for?", options: ["for(;;)", "for(0)", "for(true)", "for()"], a: 0 },
                    { q: "What is the syntax of a while loop?", options: ["while{cond}", "while(cond)", "while[cond]", "while cond:"], a: 1 }
                ],
                posttest: [
                    { q: "Output of: for(i=0;i<3;i++) printf(\"%d\",i);", options: ["012", "123", "0123", "Error"], a: 0 },
                    { q: "do-while loop ends with?", options: ["}", ");", "} while(cond);", "end"], a: 2 },
                    { q: "Which stops loop immediately?", options: ["continue", "break", "exit", "return"], a: 1 },
                    { q: "for(i=1;i<=5;i++) sum+=i; Final sum?", options: ["10", "15", "20", "25"], a: 1 },
                    { q: "Nested loops mean?", options: ["loop inside loop", "two loops side by side", "loop with break", "None"], a: 0 }
                ],
                reference: '<ul><li><em>Let Us C</em> – Yashavant Kanetkar</li><li><a href="https://www.geeksforgeeks.org/loops-in-c/" target="_blank">GeeksForGeeks – Loops in C</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nint main() {\n    int n, i;\n    long long fact = 1;\n    printf("Enter a positive integer: ");\n    scanf("%d", &n);\n\n    printf("1 to %d: ", n);\n    for (i = 1; i <= n; i++)\n        printf("%d ", i);\n\n    i = 1;\n    while (i <= n) { fact *= i; i++; }\n    printf("\\nFactorial of %d = %lld\\n", n, fact);\n    return 0;\n}'
            },
            {
                title: "Functions and Recursion",
                aim: '<p><strong>Objective:</strong> Define and call functions in C, and understand recursive function calls.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Write user-defined functions with parameters and return values.</li><li>Understand function prototypes.</li><li>Implement recursion for factorial and Fibonacci.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a number n in stdin.</td></tr><tr><td>2</td><td>The program calls factorial(n) recursively.</td></tr><tr><td>3</td><td>Observe the call stack unwinding.</td></tr><tr><td>4</td><td>Modify to compute Fibonacci recursively.</td></tr></tbody></table>',
                pretest: [
                    { q: "What is a function prototype?", options: ["Function definition", "Function declaration", "Function call", "Function return"], a: 1 },
                    { q: "Base case in recursion is?", options: ["The first call", "The condition to stop recursion", "The return type", "None"], a: 1 },
                    { q: "Keyword to return a value from function?", options: ["send", "give", "return", "output"], a: 2 },
                    { q: "What is pass by value?", options: ["Passing address", "Passing copy of variable", "Passing pointer", "None"], a: 1 },
                    { q: "void return type means?", options: ["Returns 0", "Returns nothing", "Returns null", "Undefined"], a: 1 }
                ],
                posttest: [
                    { q: "Factorial of 0 is?", options: ["0", "1", "Undefined", "Error"], a: 1 },
                    { q: "Recursion without base case causes?", options: ["Slow loop", "Stack overflow", "Compile error", "Infinite output"], a: 1 },
                    { q: "Can a function call itself?", options: ["No", "Yes – recursion", "Only in main", "Only with pointers"], a: 1 },
                    { q: "Fibonacci(5) = ?", options: ["3", "5", "8", "13"], a: 1 },
                    { q: "Function with no parameters and no return?", options: ["int f(int)", "void f(void)", "int f()", "float f(float)"], a: 1 }
                ],
                reference: '<ul><li><em>C: The Complete Reference</em> – Herbert Schildt</li><li><a href="https://www.geeksforgeeks.org/recursion/" target="_blank">GeeksForGeeks – Recursion</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nlong long factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    int n;\n    printf("Enter n: ");\n    scanf("%d", &n);\n    printf("Factorial(%d) = %lld\\n", n, factorial(n));\n    printf("Fibonacci(%d) = %d\\n", n, fibonacci(n));\n    return 0;\n}'
            },
            {
                title: "Arrays and Strings",
                aim: '<p><strong>Objective:</strong> Declare, initialize, and manipulate arrays and character strings in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Declare 1D arrays and access elements.</li><li>Use string functions: strlen, strcpy, strcat.</li><li>Understand null-terminated strings.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code, observe array traversal.</td></tr><tr><td>2</td><td>Enter a string in stdin.</td></tr><tr><td>3</td><td>Observe strlen and strrev operations.</td></tr><tr><td>4</td><td>Modify to sort the array.</td></tr></tbody></table>',
                pretest: [
                    { q: "Array index in C starts from?", options: ["1", "0", "-1", "Depends"], a: 1 },
                    { q: "Strings in C end with?", options: ["\\n", "\\0", "\\t", "NULL"], a: 1 },
                    { q: "Which function returns string length?", options: ["length()", "size()", "strlen()", "strsize()"], a: 2 },
                    { q: "Header for string functions?", options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<ctype.h>"], a: 2 },
                    { q: "What is int arr[5]?", options: ["5 pointers", "5 integers", "Single int", "String"], a: 1 }
                ],
                posttest: [
                    { q: "int arr[3] = {1,2,3}; arr[1] = ?", options: ["1", "2", "3", "Error"], a: 1 },
                    { q: "Function to concatenate strings?", options: ["strcat()", "stradd()", "concat()", "join()"], a: 0 },
                    { q: "What does strcpy(a,b) do?", options: ["Compares a and b", "Copies b into a", "Copies a into b", "None"], a: 1 },
                    { q: "Maximum index of int arr[10]?", options: ["10", "11", "9", "8"], a: 2 },
                    { q: "2D array declaration?", options: ["int a[][]", "int a[2][3]", "int a{2,3}", "int a(2)(3)"], a: 1 }
                ],
                reference: '<ul><li><em>Programming in C</em> – Stephen Kochan</li><li><a href="https://www.cplusplus.com/reference/cstring/" target="_blank">String Functions Reference</a></li></ul>',
                defaultCode: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int arr[] = {5, 3, 8, 1, 9, 2};\n    int n = 6, i;\n    printf("Array: ");\n    for (i = 0; i < n; i++) printf("%d ", arr[i]);\n\n    char str[100];\n    printf("\\nEnter a string: ");\n    scanf("%s", str);\n    printf("Length: %lu\\n", strlen(str));\n\n    // Reverse the string\n    int len = strlen(str);\n    for (i = 0; i < len/2; i++) {\n        char tmp = str[i];\n        str[i] = str[len-1-i];\n        str[len-1-i] = tmp;\n    }\n    printf("Reversed: %s\\n", str);\n    return 0;\n}'
            },
            {
                title: "Pointers",
                aim: '<p><strong>Objective:</strong> Understand pointer declaration, dereferencing, pointer arithmetic, and passing pointers to functions.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Declare and initialize pointers.</li><li>Dereference pointers using *.</li><li>Pass by reference using pointers.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code and observe pointer addresses.</td></tr><tr><td>2</td><td>See how swap() modifies variables via pointers.</td></tr><tr><td>3</td><td>Observe pointer arithmetic on arrays.</td></tr></tbody></table>',
                pretest: [
                    { q: "What does * do in declaration int *p?", options: ["Multiply", "Declares p as pointer to int", "Dereferences", "None"], a: 1 },
                    { q: "What does & operator return?", options: ["Value", "Address", "Size", "Type"], a: 1 },
                    { q: "NULL pointer points to?", options: ["Address 0", "Garbage", "Stack", "Nothing valid"], a: 0 },
                    { q: "Dereferencing means?", options: ["Getting address", "Accessing value at pointer", "Declaring pointer", "None"], a: 1 },
                    { q: "Pointer arithmetic p++ moves by?", options: ["1 byte always", "Size of pointed type", "4 bytes always", "Random"], a: 1 }
                ],
                posttest: [
                    { q: "int x=10; int *p=&x; *p=20; x = ?", options: ["10", "20", "Address", "Error"], a: 1 },
                    { q: "Dangling pointer is?", options: ["Uninitialized pointer", "Pointer to freed memory", "NULL pointer", "Wild pointer"], a: 1 },
                    { q: "What is int **p?", options: ["Pointer to pointer", "Double int", "Error", "Const pointer"], a: 0 },
                    { q: "Array name in C is?", options: ["A value", "Pointer to first element", "Copy of array", "Size of array"], a: 1 },
                    { q: "void * is?", options: ["Null pointer", "Generic pointer", "Function pointer", "Invalid"], a: 1 }
                ],
                reference: '<ul><li><em>Understanding and Using C Pointers</em> – Richard Reese</li><li><a href="https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/" target="_blank">GeeksForGeeks – Pointers</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    int *p = &x;\n    printf("Address of x: %p\\n", (void*)p);\n    printf("Value via pointer: %d\\n", *p);\n    swap(&x, &y);\n    printf("After swap: x=%d, y=%d\\n", x, y);\n    return 0;\n}'
            },
            {
                title: "Structures and Unions",
                aim: '<p><strong>Objective:</strong> Define and use structures and unions to group heterogeneous data in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Define struct with multiple data types.</li><li>Access members using dot and arrow operators.</li><li>Understand memory difference between struct and union.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code to see struct member access.</td></tr><tr><td>2</td><td>Compare sizeof struct vs union.</td></tr><tr><td>3</td><td>Modify code to add another member.</td></tr></tbody></table>',
                pretest: [
                    { q: "struct keyword is used to?", options: ["Declare array", "Group different types", "Define class", "None"], a: 1 },
                    { q: "Member access operator for struct variable?", options: ["->", "::", ".", "*"], a: 2 },
                    { q: "Member access via struct pointer?", options: [".", "::", "->", "&"], a: 2 },
                    { q: "Union allocates memory for?", options: ["All members combined", "Largest member only", "Smallest member", "None"], a: 1 },
                    { q: "typedef is used to?", options: ["Define new type alias", "Create variable", "Include library", "None"], a: 0 }
                ],
                posttest: [
                    { q: "sizeof(struct) with int and char (assuming 4+1)?", options: ["5", "8 (with padding)", "4", "1"], a: 1 },
                    { q: "Can struct contain function pointers?", options: ["No", "Yes", "Only in C++", "Depends on compiler"], a: 1 },
                    { q: "Union members share?", options: ["Names", "Same memory", "Different files", "Nothing"], a: 1 },
                    { q: "Array of structures is?", options: ["Not allowed", "Allowed", "Only 1D", "Requires malloc"], a: 1 },
                    { q: "Bit fields in struct allow?", options: ["Specifying member size in bits", "Bit shifting", "Boolean flags only", "None"], a: 0 }
                ],
                reference: '<ul><li><em>C Programming: A Modern Approach</em> – K.N. King</li><li><a href="https://www.tutorialspoint.com/cprogramming/c_structures.htm" target="_blank">TutorialsPoint – Structures</a></li></ul>',
                defaultCode: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int rollNo;\n    char name[50];\n    float marks;\n};\n\nint main() {\n    struct Student s1;\n    s1.rollNo = 101;\n    strcpy(s1.name, "Alice");\n    s1.marks = 95.5;\n    printf("Roll: %d\\nName: %s\\nMarks: %.2f\\n", s1.rollNo, s1.name, s1.marks);\n    printf("Size of struct: %lu bytes\\n", sizeof(struct Student));\n    return 0;\n}'
            },
            {
                title: "File Handling",
                aim: '<p><strong>Objective:</strong> Perform file operations (open, read, write, close) using FILE pointers in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Open files in read/write mode.</li><li>Use fprintf, fscanf, fgets, fputs.</li><li>Properly close file handles.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to write data to output.txt.</td></tr><tr><td>2</td><td>Observe the read-back output in terminal.</td></tr><tr><td>3</td><td>Modify to append instead of write.</td></tr></tbody></table>',
                pretest: [
                    { q: "Which function opens a file in C?", options: ["open()", "fopen()", "fileopen()", "create()"], a: 1 },
                    { q: "Mode to write to file (overwrite)?", options: ["r", "w", "a", "rw"], a: 1 },
                    { q: "Mode to append to existing file?", options: ["w", "a", "r+", "wa"], a: 1 },
                    { q: "fclose() is used to?", options: ["Delete file", "Close file handle", "Seek in file", "None"], a: 1 },
                    { q: "feof() returns true when?", options: ["File not found", "End of file reached", "File is empty", "Write error"], a: 1 }
                ],
                posttest: [
                    { q: "Function to write formatted data to file?", options: ["printf()", "sprintf()", "fprintf()", "puts()"], a: 2 },
                    { q: "What does fopen return on failure?", options: ["0", "NULL", "-1", "EOF"], a: 1 },
                    { q: "Binary file open mode for reading?", options: ["r", "rb", "br", "b"], a: 1 },
                    { q: "fseek() is used to?", options: ["Close file", "Move file pointer", "Read a line", "Flush buffer"], a: 1 },
                    { q: "rewind() does?", options: ["Deletes file", "Moves pointer to start", "Copies file", "None"], a: 1 }
                ],
                reference: '<ul><li><em>C Programming FAQs</em> – Steve Summit</li><li><a href="https://www.tutorialspoint.com/cprogramming/c_file_io.htm" target="_blank">TutorialsPoint – File I/O</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nint main() {\n    FILE *fp;\n    char line[100];\n\n    // Write to file\n    fp = fopen("output.txt", "w");\n    if (fp == NULL) {\n        printf("Error opening file!\\n");\n        return 1;\n    }\n    fprintf(fp, "Hello from C!\\n");\n    fprintf(fp, "File handling experiment.\\n");\n    fclose(fp);\n\n    // Read back\n    fp = fopen("output.txt", "r");\n    printf("File contents:\\n");\n    while (fgets(line, 100, fp) != NULL)\n        printf("%s", line);\n    fclose(fp);\n    return 0;\n}'
            },
            {
                title: "Dynamic Memory Allocation",
                aim: '<p><strong>Objective:</strong> Allocate and free memory dynamically using malloc, calloc, realloc, and free.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Differentiate malloc vs calloc.</li><li>Use realloc to resize allocated memory.</li><li>Avoid memory leaks by calling free().</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter n in stdin.</td></tr><tr><td>2</td><td>Program allocates n integers dynamically.</td></tr><tr><td>3</td><td>Observe the values and deallocation.</td></tr></tbody></table>',
                pretest: [
                    { q: "Header for malloc/free?", options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<memory.h>"], a: 2 },
                    { q: "malloc returns?", options: ["int*", "void*", "char*", "NULL always"], a: 1 },
                    { q: "calloc initializes memory to?", options: ["Random", "1", "0", "-1"], a: 2 },
                    { q: "free() is used to?", options: ["Clear screen", "Deallocate memory", "Initialize memory", "None"], a: 1 },
                    { q: "Memory leak occurs when?", options: ["Free called twice", "Allocated memory not freed", "malloc fails", "Pointer is NULL"], a: 1 }
                ],
                posttest: [
                    { q: "realloc(ptr, newSize) does?", options: ["Creates new block", "Resizes existing block", "Copies memory", "Frees memory"], a: 1 },
                    { q: "What is a dangling pointer?", options: ["NULL pointer", "Pointer to freed memory", "Uninitialized pointer", "Wild pointer"], a: 1 },
                    { q: "malloc(0) returns?", options: ["NULL always", "May return non-NULL", "Error", "1 byte"], a: 1 },
                    { q: "calloc(5, sizeof(int)) allocates?", options: ["5 bytes", "5 ints initialized to 0", "5 ints with garbage", "Error"], a: 1 },
                    { q: "Double free causes?", options: ["Memory leak", "Undefined behavior", "Compile error", "NULL return"], a: 1 }
                ],
                reference: '<ul><li><a href="https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c/" target="_blank">GeeksForGeeks – Dynamic Memory</a></li><li><em>Expert C Programming</em> – Peter Van der Linden</li></ul>',
                defaultCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n, i;\n    printf("How many integers to allocate? ");\n    scanf("%d", &n);\n\n    int *arr = (int*) malloc(n * sizeof(int));\n    if (!arr) { printf("Allocation failed\\n"); return 1; }\n\n    for (i = 0; i < n; i++) arr[i] = (i + 1) * 10;\n    printf("Values: ");\n    for (i = 0; i < n; i++) printf("%d ", arr[i]);\n\n    arr = (int*) realloc(arr, (n + 2) * sizeof(int));\n    arr[n] = 110; arr[n+1] = 120;\n    printf("\\nAfter realloc: ");\n    for (i = 0; i < n+2; i++) printf("%d ", arr[i]);\n    free(arr);\n    printf("\\nMemory freed.\\n");\n    return 0;\n}'
            },
            {
                title: "Sorting Algorithms",
                aim: '<p><strong>Objective:</strong> Implement and compare Bubble Sort, Selection Sort, and Insertion Sort algorithms in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Implement O(n²) sorting algorithms.</li><li>Understand comparison and swapping operations.</li><li>Analyze best, worst, and average cases.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code with default unsorted array.</td></tr><tr><td>2</td><td>Observe step-by-step bubble sort passes.</td></tr><tr><td>3</td><td>Modify to implement selection sort.</td></tr></tbody></table>',
                pretest: [
                    { q: "Bubble sort time complexity (worst)?", options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], a: 2 },
                    { q: "Stable sort preserves?", options: ["Relative order of equal elements", "Ascending order", "Descending order", "Nothing"], a: 0 },
                    { q: "Best case for bubble sort?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], a: 2 },
                    { q: "Insertion sort is efficient for?", options: ["Large random arrays", "Nearly sorted arrays", "Reverse sorted", "Duplicates"], a: 1 },
                    { q: "Selection sort selects?", options: ["Largest element", "Smallest element each pass", "Random element", "Middle element"], a: 1 }
                ],
                posttest: [
                    { q: "How many passes does bubble sort need in worst case for n elements?", options: ["n", "n-1", "n/2", "n²"], a: 1 },
                    { q: "Is bubble sort in-place?", options: ["No", "Yes", "Only for small n", "Depends"], a: 1 },
                    { q: "Insertion sort builds?", options: ["A heap", "Sorted subarray from left", "Sorted subarray from right", "Nothing"], a: 1 },
                    { q: "Fastest comparison sort (average)?", options: ["Bubble", "Selection", "Merge/Quick O(n log n)", "Insertion"], a: 2 },
                    { q: "Space complexity of bubble sort?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], a: 2 }
                ],
                reference: '<ul><li><em>Introduction to Algorithms (CLRS)</em></li><li><a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank">GeeksForGeeks – Sorting</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nvoid printArr(int a[], int n) {\n    for (int i=0;i<n;i++) printf("%d ",a[i]);\n    printf("\\n");\n}\n\nvoid bubbleSort(int a[], int n) {\n    for (int i=0;i<n-1;i++)\n        for (int j=0;j<n-i-1;j++)\n            if (a[j] > a[j+1]) {\n                int t=a[j]; a[j]=a[j+1]; a[j+1]=t;\n            }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = 7;\n    printf("Before: "); printArr(arr, n);\n    bubbleSort(arr, n);\n    printf("After:  "); printArr(arr, n);\n    return 0;\n}'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // C++ PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    cpp: {
        name: "C++ Programming",
        experiments: [
            {
                title: "Basic I/O Streams and Namespaces",
                aim: '<p><strong>Objective:</strong> Explore C++ I/O using cin, cout and understand the std namespace.</p><ul><li>Use &lt;iostream&gt; for I/O.</li><li>Understand stream operators &lt;&lt; and &gt;&gt;.</li><li>Use endl and namespace std.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Go to Simulation tab.</td></tr><tr><td>2</td><td>Provide two decimal numbers in stdin.</td></tr><tr><td>3</td><td>Observe cin/cout vs printf/scanf.</td></tr></tbody></table>',
                pretest: [
                    { q: "C++ standard input object?", options: ["scanf", "cin", "input", "read"], a: 1 },
                    { q: "Stream insertion operator?", options: [">>", "<<", "::", "->"], a: 1 },
                    { q: "Header for cin/cout?", options: ["<stdio.h>", "<conio.h>", "<iostream>", "<stream.h>"], a: 2 },
                    { q: "endl does what?", options: ["Ends program", "Newline + flushes buffer", "Ends loop", "Ends file"], a: 1 },
                    { q: "Namespace used by cout?", options: ["io", "standard", "std", "cpp"], a: 2 }
                ],
                posttest: [
                    { q: "Without 'using namespace std;' cout is written as?", options: ["std.cout", "std::cout", "cout::std", "ns::cout"], a: 1 },
                    { q: "Can printf() be used in C++?", options: ["No", "Yes, include <cstdio>", "Only in main", "Only in classes"], a: 1 },
                    { q: "Stream extraction operator?", options: ["<<", ">>", "<>", "><"], a: 1 },
                    { q: "cerr is used for?", options: ["Standard output", "Error output", "File output", "String output"], a: 1 },
                    { q: "C++ comments use?", options: ["# only", "// and /* */", "<!-- -->", "** only"], a: 1 }
                ],
                reference: '<ul><li><em>The C++ Programming Language</em> – Bjarne Stroustrup</li><li><a href="https://cppreference.com" target="_blank">cppreference.com</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    cout << "Enter two decimals: ";\n    cin >> a >> b;\n    cout << "Sum: " << (a+b) << endl;\n    cout << "Product: " << (a*b) << endl;\n    return 0;\n}'
            },
            {
                title: "Classes and Objects",
                aim: '<p><strong>Objective:</strong> Define classes with data members and member functions; create objects in C++.</p><ul><li>Define a class with private and public members.</li><li>Use constructors and destructors.</li><li>Create and use objects.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see class definition and object creation.</td></tr><tr><td>2</td><td>Observe constructor being called automatically.</td></tr><tr><td>3</td><td>Add a method and invoke it.</td></tr></tbody></table>',
                pretest: [
                    { q: "Default access specifier in C++ class?", options: ["public", "private", "protected", "none"], a: 1 },
                    { q: "Constructor is called when?", options: ["Object deleted", "Object created", "Function called", "Program starts"], a: 1 },
                    { q: "Destructor syntax?", options: ["~ClassName()", "!ClassName()", "del ClassName()", "free ClassName()"], a: 0 },
                    { q: "this pointer refers to?", options: ["Base class", "Current object", "Derived class", "Static member"], a: 1 },
                    { q: "Encapsulation means?", options: ["Hiding data inside class", "Inheriting classes", "Overloading operators", "Creating objects"], a: 0 }
                ],
                posttest: [
                    { q: "Can a class have multiple constructors?", options: ["No", "Yes, constructor overloading", "Only 2", "Only with default args"], a: 1 },
                    { q: "Static member belongs to?", options: ["Each object", "Class itself", "Derived class", "Base class only"], a: 1 },
                    { q: "Getter/setter methods achieve?", options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"], a: 1 },
                    { q: "Object created on heap using?", options: ["malloc", "new", "alloc", "create"], a: 1 },
                    { q: "delete keyword is used to?", options: ["Destroy class", "Free heap memory", "Remove method", "Close file"], a: 1 }
                ],
                reference: '<ul><li><em>Object-Oriented Programming in C++</em> – Robert Lafore</li><li><a href="https://www.geeksforgeeks.org/c-classes-and-objects/" target="_blank">GeeksForGeeks – Classes</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double length, width;\npublic:\n    Rectangle(double l, double w) : length(l), width(w) {\n        cout << "Rectangle created!" << endl;\n    }\n    double area() { return length * width; }\n    double perimeter() { return 2*(length+width); }\n    ~Rectangle() { cout << "Rectangle destroyed!" << endl; }\n};\n\nint main() {\n    Rectangle r(5.0, 3.0);\n    cout << "Area: " << r.area() << endl;\n    cout << "Perimeter: " << r.perimeter() << endl;\n    return 0;\n}'
            },
            {
                title: "Inheritance",
                aim: '<p><strong>Objective:</strong> Implement single and multilevel inheritance in C++.</p><ul><li>Define base and derived classes.</li><li>Use protected access specifier.</li><li>Override base class methods.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code and observe derived class inheriting base members.</td></tr><tr><td>2</td><td>See how derived constructor calls base constructor.</td></tr><tr><td>3</td><td>Modify code to add multilevel inheritance.</td></tr></tbody></table>',
                pretest: [
                    { q: "Syntax of inheritance?", options: ["class D extends B", "class D : B", "class D inherits B", "class D(B)"], a: 1 },
                    { q: "protected members accessible in?", options: ["All classes", "Same class only", "Same and derived classes", "External functions"], a: 2 },
                    { q: "C++ supports multiple inheritance?", options: ["No", "Yes", "Only with virtual", "Only two classes"], a: 1 },
                    { q: "Base class in C++ is also called?", options: ["Child class", "Super class/Parent class", "Abstract class", "Final class"], a: 1 },
                    { q: "Constructor execution order in inheritance?", options: ["Derived first", "Base first", "Simultaneous", "Random"], a: 1 }
                ],
                posttest: [
                    { q: "Diamond problem occurs in?", options: ["Single inheritance", "Multiple inheritance", "Multilevel", "Hierarchical"], a: 1 },
                    { q: "virtual keyword in base class enables?", options: ["Static binding", "Dynamic binding/polymorphism", "Multiple inheritance", "Encapsulation"], a: 1 },
                    { q: "Private base members in derived class?", options: ["Accessible directly", "Not accessible", "Accessible via public", "Accessible via protected"], a: 1 },
                    { q: "Destructor order in inheritance?", options: ["Base first", "Derived first", "Simultaneous", "Random"], a: 1 },
                    { q: "Redefining base method in derived class?", options: ["Overloading", "Overriding", "Hiding", "Shadowing"], a: 1 }
                ],
                reference: '<ul><li><em>C++ Primer</em> – Lippman, Lajoie, Moo</li><li><a href="https://www.geeksforgeeks.org/inheritance-in-c/" target="_blank">GeeksForGeeks – Inheritance</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\npublic:\n    Animal(string n) : name(n) {}\n    void speak() { cout << name << " makes a sound." << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(string n) : Animal(n) {}\n    void speak() { cout << name << " says: Woof!" << endl; }\n    void fetch() { cout << name << " fetches the ball!" << endl; }\n};\n\nint main() {\n    Animal a("Generic Animal");\n    Dog d("Buddy");\n    a.speak();\n    d.speak();\n    d.fetch();\n    return 0;\n}'
            },
            {
                title: "Polymorphism and Virtual Functions",
                aim: '<p><strong>Objective:</strong> Achieve runtime polymorphism using virtual functions and abstract classes.</p><ul><li>Use virtual functions for dynamic dispatch.</li><li>Create abstract classes with pure virtual functions.</li><li>Understand vtable mechanism.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Observe base pointer calling derived class method.</td></tr><tr><td>2</td><td>Remove virtual keyword and note the difference.</td></tr><tr><td>3</td><td>Implement pure virtual function.</td></tr></tbody></table>',
                pretest: [
                    { q: "Runtime polymorphism achieved via?", options: ["Function overloading", "Virtual functions", "Templates", "Macros"], a: 1 },
                    { q: "Pure virtual function syntax?", options: ["virtual f() = 0;", "abstract f();", "virtual f(){}", "pure f();"], a: 0 },
                    { q: "Class with at least one pure virtual function?", options: ["Concrete class", "Abstract class", "Template class", "Static class"], a: 1 },
                    { q: "Can you instantiate abstract class?", options: ["Yes", "No", "Only with new", "Only in derived"], a: 1 },
                    { q: "Virtual destructor is needed when?", options: ["Always", "Never", "Deleting derived via base pointer", "Copying objects"], a: 2 }
                ],
                posttest: [
                    { q: "Without virtual, base pointer calls?", options: ["Derived method", "Base method (static binding)", "Both", "None"], a: 1 },
                    { q: "vtable contains?", options: ["Variable values", "Virtual function pointers", "Class members", "Constructor"], a: 1 },
                    { q: "override keyword in C++11 means?", options: ["New function", "Explicitly marks overriding", "Static override", "None"], a: 1 },
                    { q: "final keyword prevents?", options: ["Overloading", "Further inheritance/overriding", "Instantiation", "None"], a: 1 },
                    { q: "Compile-time polymorphism uses?", options: ["Virtual functions", "Function/operator overloading", "Inheritance only", "RTTI"], a: 1 }
                ],
                reference: '<ul><li><em>The C++ Programming Language</em> – Stroustrup</li><li><a href="https://www.geeksforgeeks.org/virtual-function-cpp/" target="_blank">GeeksForGeeks – Virtual Functions</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual void display() { cout << "Shape area: " << area() << endl; }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\n    double r;\npublic:\n    Circle(double r) : r(r) {}\n    double area() override { return 3.14159 * r * r; }\n};\n\nclass Square : public Shape {\n    double s;\npublic:\n    Square(double s) : s(s) {}\n    double area() override { return s * s; }\n};\n\nint main() {\n    Shape* shapes[] = { new Circle(5), new Square(4) };\n    for (auto s : shapes) { s->display(); delete s; }\n    return 0;\n}'
            },
            {
                title: "Templates",
                aim: '<p><strong>Objective:</strong> Write generic functions and classes using C++ templates.</p><ul><li>Define function templates for generic algorithms.</li><li>Define class templates for generic containers.</li><li>Understand template specialization.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code to see template function with int and double.</td></tr><tr><td>2</td><td>Observe template class Stack working with different types.</td></tr></tbody></table>',
                pretest: [
                    { q: "Template keyword syntax?", options: ["template<T>", "template<typename T>", "generic<T>", "type<T>"], a: 1 },
                    { q: "Templates provide?", options: ["Runtime polymorphism", "Compile-time generics", "Dynamic dispatch", "Encapsulation"], a: 1 },
                    { q: "STL is based on?", options: ["Macros", "Templates", "Virtual functions", "Inheritance"], a: 1 },
                    { q: "Template specialization allows?", options: ["Different behavior for specific type", "Multiple inheritance", "Runtime dispatch", "None"], a: 0 },
                    { q: "Function template generates?", options: ["One function", "Functions per type used", "Virtual table", "Abstract class"], a: 1 }
                ],
                posttest: [
                    { q: "Error in template resolved at?", options: ["Runtime", "Link time", "Compile time", "Preprocessing"], a: 2 },
                    { q: "Class template instance?", options: ["Stack", "Stack<int>", "template Stack", "generic Stack"], a: 1 },
                    { q: "Can templates have default type arguments?", options: ["No", "Yes", "Only in functions", "Only in classes"], a: 1 },
                    { q: "Variadic templates allow?", options: ["Variable number of template arguments", "Variable size arrays", "Multiple inheritance", "Runtime types"], a: 0 },
                    { q: "Template vs Macro difference?", options: ["No difference", "Templates are type-safe", "Macros are faster", "Both same"], a: 1 }
                ],
                reference: '<ul><li><em>Effective Modern C++</em> – Scott Meyers</li><li><a href="https://www.geeksforgeeks.org/templates-cpp/" target="_blank">GeeksForGeeks – Templates</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT maxVal(T a, T b) { return (a > b) ? a : b; }\n\ntemplate <typename T>\nclass Stack {\n    T data[100]; int top = -1;\npublic:\n    void push(T val) { data[++top] = val; }\n    T pop() { return data[top--]; }\n    bool empty() { return top == -1; }\n};\n\nint main() {\n    cout << "Max(3,7): " << maxVal(3,7) << endl;\n    cout << "Max(3.5,2.1): " << maxVal(3.5,2.1) << endl;\n    Stack<int> s;\n    s.push(10); s.push(20); s.push(30);\n    cout << "Stack pop: " << s.pop() << ", " << s.pop() << endl;\n    return 0;\n}'
            },
            {
                title: "STL: Vectors, Maps and Algorithms",
                aim: '<p><strong>Objective:</strong> Use STL containers vector and map, and STL algorithms like sort and find.</p><ul><li>Use vector for dynamic arrays.</li><li>Use map for key-value storage.</li><li>Apply STL sort, find, and count algorithms.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see vector push_back and iteration.</td></tr><tr><td>2</td><td>Observe map insertion and lookup.</td></tr><tr><td>3</td><td>See STL sort applied to vector.</td></tr></tbody></table>',
                pretest: [
                    { q: "vector header?", options: ["<array>", "<vector>", "<list>", "<deque>"], a: 1 },
                    { q: "map stores?", options: ["Values only", "Key-value pairs sorted by key", "Unsorted pairs", "Arrays"], a: 1 },
                    { q: "vector push_back() does?", options: ["Inserts at front", "Inserts at back", "Removes last", "Resizes"], a: 1 },
                    { q: "STL sort() requires?", options: ["<algorithm>", "<sort>", "<utility>", "<functional>"], a: 0 },
                    { q: "Iterator type for vector<int>?", options: ["int*", "vector::iter", "vector<int>::iterator", "auto always"], a: 2 }
                ],
                posttest: [
                    { q: "map vs unordered_map?", options: ["No difference", "map sorted, unordered_map O(1) avg lookup", "unordered_map sorted", "map is faster"], a: 1 },
                    { q: "vector size() returns?", options: ["Capacity", "Number of elements", "Max size", "Memory bytes"], a: 1 },
                    { q: "STL find() returns?", options: ["Index", "Iterator to element or end()", "bool", "Pointer"], a: 1 },
                    { q: "Erase element from vector at index i?", options: ["v.remove(i)", "v.erase(v.begin()+i)", "v.delete(i)", "v[i]=0"], a: 1 },
                    { q: "set guarantees?", options: ["Sorted unique elements", "Unsorted unique", "Sorted duplicates", "Random order"], a: 0 }
                ],
                reference: '<ul><li><em>The C++ Standard Library</em> – Nicolai Josuttis</li><li><a href="https://cppreference.com/w/cpp/container" target="_blank">STL Containers Reference</a></li></ul>',
                defaultCode: '#include <iostream>\n#include <vector>\n#include <map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5,2,8,1,9,3};\n    cout << "Before sort: ";\n    for (auto x: v) cout << x << " ";\n    sort(v.begin(), v.end());\n    cout << "\\nAfter sort: ";\n    for (auto x: v) cout << x << " ";\n\n    map<string,int> scores;\n    scores["Alice"] = 95;\n    scores["Bob"] = 87;\n    scores["Carol"] = 92;\n    cout << "\\n\\nScoreboard:\\n";\n    for (auto& p: scores)\n        cout << p.first << ": " << p.second << "\\n";\n    return 0;\n}'
            },
            {
                title: "Exception Handling",
                aim: '<p><strong>Objective:</strong> Handle runtime errors gracefully using try, catch, and throw in C++.</p><ul><li>Use try-catch blocks for error handling.</li><li>Throw standard and custom exceptions.</li><li>Use multiple catch blocks.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and enter 0 to trigger divide-by-zero exception.</td></tr><tr><td>2</td><td>Enter a negative number to trigger another exception.</td></tr><tr><td>3</td><td>Enter a valid number and observe normal flow.</td></tr></tbody></table>',
                pretest: [
                    { q: "Exception handling keywords in C++?", options: ["try/catch/finally", "try/catch/throw", "error/handle/raise", "begin/rescue/end"], a: 1 },
                    { q: "throw keyword is used to?", options: ["Catch exception", "Raise/throw exception", "Ignore error", "Log error"], a: 1 },
                    { q: "Catch-all block syntax?", options: ["catch(all)", "catch(...)", "catch(Exception e)", "catch(*)"], a: 1 },
                    { q: "std::exception base class header?", options: ["<error>", "<stdexcept>", "<exception>", "<iostream>"], a: 2 },
                    { q: "If exception uncaught, program?", options: ["Continues", "Terminates (abort)", "Logs warning", "Returns 0"], a: 1 }
                ],
                posttest: [
                    { q: "std::runtime_error is?", options: ["Compile error class", "Runtime exception class", "Warning class", "Abort class"], a: 1 },
                    { q: "noexcept specifier means?", options: ["Function throws", "Function does not throw", "Function may throw", "None"], a: 1 },
                    { q: "Order of catch blocks should be?", options: ["General to specific", "Specific to general", "Alphabetical", "Random"], a: 1 },
                    { q: "RAII stands for?", options: ["Resource Acquisition Is Initialization", "Runtime Array Index", "Recursive Algorithm", "None"], a: 0 },
                    { q: "Stack unwinding happens when?", options: ["Program starts", "Exception thrown", "Loop ends", "Function returns normally"], a: 1 }
                ],
                reference: '<ul><li><em>More Effective C++</em> – Scott Meyers</li><li><a href="https://www.geeksforgeeks.org/exception-handling-c/" target="_blank">GeeksForGeeks – Exception Handling</a></li></ul>',
                defaultCode: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) throw runtime_error("Division by zero!");\n    if (a < 0 || b < 0) throw invalid_argument("Negative numbers not allowed!");\n    return a / b;\n}\n\nint main() {\n    double a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    try {\n        cout << "Result: " << divide(a, b) << endl;\n    } catch (const runtime_error& e) {\n        cout << "Runtime Error: " << e.what() << endl;\n    } catch (const invalid_argument& e) {\n        cout << "Invalid Argument: " << e.what() << endl;\n    } catch (...) {\n        cout << "Unknown exception!" << endl;\n    }\n    return 0;\n}'
            },
            {
                title: "Operator Overloading",
                aim: '<p><strong>Objective:</strong> Overload operators for user-defined types to make them behave like built-in types.</p><ul><li>Overload arithmetic operators (+, -, *).</li><li>Overload comparison operators (==, &lt;).</li><li>Overload stream operators &lt;&lt; and &gt;&gt;.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run to observe Complex number addition via overloaded +.</td></tr><tr><td>2</td><td>Observe cout&lt;&lt; working with complex type.</td></tr></tbody></table>',
                pretest: [
                    { q: "Operator overloading allows?", options: ["Redefining operators for custom types", "Creating new operators", "Removing operators", "All operators"], a: 0 },
                    { q: "Which operator cannot be overloaded?", options: ["+", "->", "::", "=="], a: 2 },
                    { q: "Friend function can access?", options: ["Only public members", "Private and protected members", "Only static members", "Nothing extra"], a: 1 },
                    { q: "Overloading << for cout is done using?", options: ["Member function", "Friend function returning ostream&", "Static function", "Virtual function"], a: 1 },
                    { q: "Unary operator overloading example?", options: ["a + b", "++a", "a == b", "a * b"], a: 1 }
                ],
                posttest: [
                    { q: "operator+ returns?", options: ["void", "New object of same type usually", "int always", "Pointer"], a: 1 },
                    { q: "Assignment operator = default behavior?", options: ["Deep copy", "Shallow copy", "Move semantics", "No copy"], a: 1 },
                    { q: "Overloading == should also overload?", options: ["+=", "!=", "<<", "[]"], a: 1 },
                    { q: "Can arithmetic operators be overloaded as non-member?", options: ["No", "Yes, using friend", "Only in C++17", "Only for built-ins"], a: 1 },
                    { q: "Overloading [] allows?", options: ["Custom indexing", "Array resizing", "Pointer arithmetic", "None"], a: 0 }
                ],
                reference: '<ul><li><em>C++ Primer Plus</em> – Stephen Prata</li><li><a href="https://en.cppreference.com/w/cpp/language/operators" target="_blank">Operator Overloading Reference</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Complex {\npublic:\n    double real, imag;\n    Complex(double r=0, double i=0): real(r), imag(i) {}\n    Complex operator+(const Complex& c) {\n        return Complex(real+c.real, imag+c.imag);\n    }\n    bool operator==(const Complex& c) {\n        return real==c.real && imag==c.imag;\n    }\n    friend ostream& operator<<(ostream& os, const Complex& c) {\n        os << c.real << (c.imag>=0?"+":"") << c.imag << "i";\n        return os;\n    }\n};\n\nint main() {\n    Complex c1(3,4), c2(1,-2);\n    cout << "c1 = " << c1 << endl;\n    cout << "c2 = " << c2 << endl;\n    cout << "c1+c2 = " << (c1+c2) << endl;\n    cout << "Equal? " << (c1==c2 ? "Yes":"No") << endl;\n    return 0;\n}'
            },
            {
                title: "File Streams",
                aim: '<p><strong>Objective:</strong> Perform file I/O using fstream, ifstream, and ofstream in C++.</p><ul><li>Write to files using ofstream.</li><li>Read from files using ifstream.</li><li>Use fstream for both read and write.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to write data file.</td></tr><tr><td>2</td><td>Observe the read-back content in terminal.</td></tr><tr><td>3</td><td>Modify to read word by word.</td></tr></tbody></table>',
                pretest: [
                    { q: "Header for file streams in C++?", options: ["<stdio.h>", "<file>", "<fstream>", "<iostream>"], a: 2 },
                    { q: "ofstream is used for?", options: ["Reading files", "Writing files", "Both", "Binary only"], a: 1 },
                    { q: "ifstream is used for?", options: ["Writing files", "Reading files", "Both", "Appending"], a: 1 },
                    { q: "Open file for append in C++?", options: ["ios::write", "ios::app", "ios::in", "ios::add"], a: 1 },
                    { q: "Checking if file opened successfully?", options: ["file.check()", "file.is_open()", "file.good()", "file.valid()"], a: 1 }
                ],
                posttest: [
                    { q: "getline() reads?", options: ["One word", "Entire line", "One character", "Until EOF"], a: 1 },
                    { q: "seekg() is used to?", options: ["Write position", "Read position", "Close file", "Flush buffer"], a: 1 },
                    { q: "ios::binary opens file as?", options: ["Text mode", "Binary mode", "Append mode", "Read-only"], a: 1 },
                    { q: "File closes automatically when?", options: ["Never", "Program ends", "fstream object goes out of scope", "After first read"], a: 2 },
                    { q: "eof() returns true when?", options: ["File not found", "End of file reached", "File is empty", "Write fails"], a: 1 }
                ],
                reference: '<ul><li><a href="https://www.geeksforgeeks.org/file-handling-c-classes/" target="_blank">GeeksForGeeks – File Handling</a></li><li><em>The C++ Standard Library</em> – Josuttis</li></ul>',
                defaultCode: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Write\n    ofstream out("data.txt");\n    out << "C++ File Stream Experiment\\n";\n    out << "Line 2: Hello World\\n";\n    out.close();\n\n    // Read back\n    ifstream in("data.txt");\n    string line;\n    cout << "File contents:\\n";\n    while (getline(in, line))\n        cout << line << "\\n";\n    in.close();\n    return 0;\n}'
            },
            {
                title: "Smart Pointers and Move Semantics",
                aim: '<p><strong>Objective:</strong> Use C++11 smart pointers (unique_ptr, shared_ptr) and understand move semantics.</p><ul><li>Avoid raw pointer memory leaks.</li><li>Use unique_ptr for exclusive ownership.</li><li>Use shared_ptr for shared ownership.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe automatic memory cleanup.</td></tr><tr><td>2</td><td>Note shared_ptr reference count behavior.</td></tr></tbody></table>',
                pretest: [
                    { q: "Smart pointers are in header?", options: ["<pointer>", "<smart>", "<memory>", "<ptr>"], a: 2 },
                    { q: "unique_ptr allows how many owners?", options: ["Unlimited", "Two", "One", "Zero"], a: 2 },
                    { q: "shared_ptr uses?", options: ["RAII only", "Reference counting", "Garbage collection", "Stack allocation"], a: 1 },
                    { q: "weak_ptr prevents?", options: ["Memory leak", "Circular reference", "Dangling pointer", "Double free"], a: 1 },
                    { q: "make_unique creates?", options: ["shared_ptr", "unique_ptr", "weak_ptr", "raw pointer"], a: 1 }
                ],
                posttest: [
                    { q: "unique_ptr transfer ownership using?", options: ["copy", "std::move", "assignment", "clone"], a: 1 },
                    { q: "shared_ptr destroyed when?", options: ["First owner gone", "Last owner gone", "Manually deleted", "Scope ends of first"], a: 1 },
                    { q: "RAII stands for?", options: ["Resource Acquisition Is Initialization", "Raw Array Index Increment", "Reference And Identity Index", "None"], a: 0 },
                    { q: "Move semantics avoid?", options: ["Copying large objects", "Deletion", "Inheritance", "Templates"], a: 0 },
                    { q: "std::move() performs?", options: ["Copy", "Deep copy", "Transfers ownership (cast to rvalue)", "Delete"], a: 2 }
                ],
                reference: '<ul><li><em>Effective Modern C++</em> – Scott Meyers</li><li><a href="https://en.cppreference.com/w/cpp/memory" target="_blank">cppreference – Memory</a></li></ul>',
                defaultCode: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Resource {\npublic:\n    string name;\n    Resource(string n) : name(n) { cout << name << " acquired\\n"; }\n    ~Resource() { cout << name << " released\\n"; }\n};\n\nint main() {\n    {\n        unique_ptr<Resource> u1 = make_unique<Resource>("UniqueResource");\n        cout << "Using: " << u1->name << "\\n";\n    } // auto-released here\n\n    shared_ptr<Resource> s1 = make_shared<Resource>("SharedResource");\n    {\n        shared_ptr<Resource> s2 = s1; // ref count = 2\n        cout << "Ref count: " << s1.use_count() << "\\n";\n    } // ref count = 1\n    cout << "Ref count: " << s1.use_count() << "\\n";\n    return 0;\n}'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JAVA PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    java: {
        name: "Java Programming",
        experiments: [
            {
                title: "Classes, Objects and Console I/O",
                aim: '<p><strong>Objective:</strong> Understand Java\'s class structure and use Scanner for console input.</p><ul><li>Define a public class with main method.</li><li>Use java.util.Scanner for input.</li><li>Use System.out.println for output.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Go to Simulation tab.</td></tr><tr><td>2</td><td>Provide your name in stdin.</td></tr><tr><td>3</td><td>Click Run Code and observe output.</td></tr></tbody></table>',
                pretest: [
                    { q: "Java main method signature?", options: ["void main()", "public static void main(String[] args)", "static main(String args)", "public void main()"], a: 1 },
                    { q: "Scanner class is in package?", options: ["java.io", "java.lang", "java.util", "java.net"], a: 2 },
                    { q: "Standard output in Java?", options: ["cout", "printf", "System.out.println", "print"], a: 2 },
                    { q: "Java is platform-independent because of?", options: ["Compiler", "JVM", "JRE", "JDK"], a: 1 },
                    { q: "File extension of Java source code?", options: [".class", ".jar", ".java", ".jv"], a: 2 }
                ],
                posttest: [
                    { q: "Compiled Java file extension?", options: [".java", ".class", ".jar", ".obj"], a: 1 },
                    { q: "new keyword in Java?", options: ["Creates primitive", "Creates object on heap", "Creates static variable", "None"], a: 1 },
                    { q: "Java entry point is?", options: ["start()", "init()", "main()", "run()"], a: 2 },
                    { q: "scanner.nextLine() reads?", options: ["One word", "Entire line", "One character", "One int"], a: 1 },
                    { q: "Java is?", options: ["Interpreted only", "Compiled only", "Both compiled and interpreted", "Neither"], a: 2 }
                ],
                reference: '<ul><li><em>Effective Java</em> – Joshua Bloch</li><li><a href="https://docs.oracle.com/javase/tutorial/" target="_blank">Oracle Java Tutorials</a></li></ul>',
                defaultCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter your name:");\n        String name = sc.hasNextLine() ? sc.nextLine() : "Student";\n        System.out.println("Hello, " + name + "! Welcome to Java Lab.");\n        sc.close();\n    }\n}'
            },
            {
                title: "Control Flow: if-else, switch, loops",
                aim: '<p><strong>Objective:</strong> Master conditional statements and loops in Java.</p><ul><li>Use if-else-if ladder and switch-case.</li><li>Implement for, while, and do-while loops.</li><li>Use break and continue.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a number in stdin.</td></tr><tr><td>2</td><td>Observe grade assignment via if-else.</td></tr><tr><td>3</td><td>Observe loop printing multiplication table.</td></tr></tbody></table>',
                pretest: [
                    { q: "Java switch can use which type from Java 7+?", options: ["float", "String", "boolean", "double"], a: 1 },
                    { q: "Enhanced for-each loop syntax?", options: ["for(int x: arr)", "foreach(x in arr)", "for(arr: x)", "forall(x, arr)"], a: 0 },
                    { q: "do-while guarantees?", options: ["No execution", "At least one execution", "Exact two executions", "Depends"], a: 1 },
                    { q: "Labeled break breaks out of?", options: ["Current loop only", "Labeled enclosing loop", "Method", "Switch only"], a: 1 },
                    { q: "ternary operator in Java?", options: ["a?b:c", "if(a)b else c", "a then b else c", "a ?? b : c"], a: 0 }
                ],
                posttest: [
                    { q: "Output of: for(int i=0;i<3;i++) System.out.print(i);", options: ["012", "123", "0 1 2", "Error"], a: 0 },
                    { q: "Infinite loop in Java?", options: ["while(false)", "for(;;)", "do{}while(0)", "loop()"], a: 1 },
                    { q: "switch default executes when?", options: ["Always", "No case matches", "First always", "Last always"], a: 1 },
                    { q: "Java 14+ switch expression can?", options: ["Only statement style", "Return values using ->", "Use float", "None"], a: 1 },
                    { q: "continue in a loop does?", options: ["Stops loop", "Skips current iteration", "Goes to default", "Returns from method"], a: 1 }
                ],
                reference: '<ul><li><em>Head First Java</em> – Kathy Sierra</li><li><a href="https://www.w3schools.com/java/java_conditions.asp" target="_blank">W3Schools Java Conditions</a></li></ul>',
                defaultCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter marks (0-100):");\n        int marks = sc.nextInt();\n        String grade;\n        if (marks >= 90) grade = "A";\n        else if (marks >= 75) grade = "B";\n        else if (marks >= 60) grade = "C";\n        else grade = "F";\n        System.out.println("Grade: " + grade);\n        System.out.println("\\nMultiplication table for 5:");\n        for (int i = 1; i <= 10; i++)\n            System.out.println("5 x " + i + " = " + (5*i));\n        sc.close();\n    }\n}'
            },
            {
                title: "Arrays and ArrayList",
                aim: '<p><strong>Objective:</strong> Work with primitive arrays and java.util.ArrayList in Java.</p><ul><li>Declare, initialize, and traverse arrays.</li><li>Use ArrayList for dynamic collections.</li><li>Perform sorting using Arrays.sort().</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see array operations.</td></tr><tr><td>2</td><td>Observe ArrayList add, remove, and iteration.</td></tr></tbody></table>',
                pretest: [
                    { q: "Java array declaration?", options: ["int arr[];", "array<int> arr;", "int[] arr;", "Both A and C"], a: 3 },
                    { q: "Array length in Java?", options: ["arr.length()", "arr.size()", "arr.length", "length(arr)"], a: 2 },
                    { q: "ArrayList is in package?", options: ["java.lang", "java.io", "java.util", "java.array"], a: 2 },
                    { q: "Arrays.sort() uses?", options: ["Bubble sort", "Dual-pivot quicksort (for primitives)", "Merge sort", "Heap sort"], a: 1 },
                    { q: "Default value of int array elements?", options: ["null", "garbage", "0", "1"], a: 2 }
                ],
                posttest: [
                    { q: "ArrayIndexOutOfBoundsException thrown when?", options: ["Array is null", "Index >= array length", "Array is empty", "Wrong type"], a: 1 },
                    { q: "ArrayList vs Array difference?", options: ["No difference", "ArrayList is dynamic", "Array is dynamic", "ArrayList is faster"], a: 1 },
                    { q: "2D array in Java?", options: ["int[][] matrix", "int[,] matrix", "int matrix[][]", "Both A and C"], a: 3 },
                    { q: "Copying array properly?", options: ["arr2 = arr1 (reference copy)", "System.arraycopy()", "arr2 = arr1.clone()", "Both B and C"], a: 3 },
                    { q: "ArrayList remove(int index) vs remove(Object)?", options: ["Same behavior", "remove(int) by index, remove(Object) by value", "remove(Object) by index", "Both by value"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html" target="_blank">Java ArrayList Docs</a></li><li><em>Java: The Complete Reference</em> – Herbert Schildt</li></ul>',
                defaultCode: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 1, 9};\n        System.out.println("Before: " + Arrays.toString(arr));\n        Arrays.sort(arr);\n        System.out.println("Sorted: " + Arrays.toString(arr));\n\n        ArrayList<String> list = new ArrayList<>();\n        list.add("Alice"); list.add("Bob"); list.add("Carol");\n        list.remove("Bob");\n        System.out.println("\\nArrayList: " + list);\n        System.out.println("Size: " + list.size());\n        for (String s : list) System.out.println("  - " + s);\n    }\n}'
            },
            {
                title: "Inheritance and Polymorphism",
                aim: '<p><strong>Objective:</strong> Implement inheritance hierarchies and achieve runtime polymorphism in Java.</p><ul><li>Use extends keyword for inheritance.</li><li>Override methods using @Override.</li><li>Use superclass reference for polymorphism.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe method overriding.</td></tr><tr><td>2</td><td>See superclass reference call subclass method.</td></tr></tbody></table>',
                pretest: [
                    { q: "Java inheritance keyword?", options: ["inherits", "extends", "implements", "super"], a: 1 },
                    { q: "Java supports multiple class inheritance?", options: ["Yes", "No, only through interfaces", "Only 2 classes", "Only abstract classes"], a: 1 },
                    { q: "super keyword calls?", options: ["Child method", "Parent class method/constructor", "Static method", "Interface method"], a: 1 },
                    { q: "@Override annotation?", options: ["Required for overriding", "Optional, marks intentional override", "Creates new method", "None"], a: 1 },
                    { q: "final class in Java?", options: ["Can be extended", "Cannot be extended", "Is abstract", "Is static"], a: 1 }
                ],
                posttest: [
                    { q: "Method overriding vs overloading?", options: ["Same thing", "Overriding: same signature in subclass; Overloading: different params", "Overloading in subclass", "None"], a: 1 },
                    { q: "Casting Animal a = new Dog(); ((Dog)a).bark(); is?", options: ["Compile error", "Downcasting", "Upcasting", "Invalid"], a: 1 },
                    { q: "instanceof operator checks?", options: ["Object size", "If object is instance of type", "Equality", "Hash code"], a: 1 },
                    { q: "Object class is parent of?", options: ["All Java classes", "Only abstract classes", "Only concrete classes", "Nothing"], a: 0 },
                    { q: "Polymorphism means?", options: ["Many classes", "One interface, many implementations", "Multiple inheritance", "Multiple constructors"], a: 1 }
                ],
                reference: '<ul><li><em>Head First Java</em> – Kathy Sierra</li><li><a href="https://www.geeksforgeeks.org/inheritance-in-java/" target="_blank">GeeksForGeeks – Java Inheritance</a></li></ul>',
                defaultCode: 'public class Main {\n    static class Animal {\n        String name;\n        Animal(String n) { name = n; }\n        void speak() { System.out.println(name + " makes a sound."); }\n    }\n    static class Dog extends Animal {\n        Dog(String n) { super(n); }\n        @Override void speak() { System.out.println(name + " says: Woof!"); }\n        void fetch() { System.out.println(name + " fetches the ball!"); }\n    }\n    static class Cat extends Animal {\n        Cat(String n) { super(n); }\n        @Override void speak() { System.out.println(name + " says: Meow!"); }\n    }\n    public static void main(String[] args) {\n        Animal[] animals = { new Dog("Rex"), new Cat("Whiskers"), new Dog("Buddy") };\n        for (Animal a : animals) a.speak();\n    }\n}'
            },
            {
                title: "Interfaces and Abstract Classes",
                aim: '<p><strong>Objective:</strong> Define and implement Java interfaces and abstract classes.</p><ul><li>Create interfaces with abstract methods.</li><li>Implement interface in multiple classes.</li><li>Use abstract classes as partial implementations.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Observe interface defined with methods.</td></tr><tr><td>2</td><td>See different classes implementing same interface.</td></tr></tbody></table>',
                pretest: [
                    { q: "Interface keyword in Java?", options: ["interface", "abstract", "implements", "iface"], a: 0 },
                    { q: "Class implements interface using?", options: ["extends", "implements", "uses", "with"], a: 1 },
                    { q: "Interface methods are by default?", options: ["private", "protected", "public abstract", "static"], a: 2 },
                    { q: "Abstract class can have?", options: ["Only abstract methods", "Only concrete methods", "Both abstract and concrete methods", "Neither"], a: 2 },
                    { q: "Can interface be instantiated?", options: ["Yes", "No", "Only with new", "Only abstract can"], a: 1 }
                ],
                posttest: [
                    { q: "Java 8 interface can have?", options: ["Only abstract methods", "Default and static methods too", "Private methods", "Constructor"], a: 1 },
                    { q: "Functional interface has?", options: ["Zero abstract methods", "Exactly one abstract method", "Multiple abstract methods", "No methods"], a: 1 },
                    { q: "Abstract method must be?", options: ["Implemented in concrete subclass", "Ignored", "Static", "Final"], a: 0 },
                    { q: "Interface vs abstract class?", options: ["No difference", "Interface: pure contract; Abstract: partial impl", "Abstract: no state; Interface: has state", "Both have constructors"], a: 1 },
                    { q: "Multiple interfaces can be implemented?", options: ["No", "Yes", "Only 2", "Only same package"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.oracle.com/javase/tutorial/java/IandI/index.html" target="_blank">Oracle Interfaces Tutorial</a></li><li><em>Effective Java</em> – Joshua Bloch</li></ul>',
                defaultCode: 'public class Main {\n    interface Drawable {\n        void draw();\n        default String getColor() { return "Black"; }\n    }\n    interface Resizable {\n        void resize(double factor);\n    }\n    static class Circle implements Drawable, Resizable {\n        double radius;\n        Circle(double r) { radius = r; }\n        public void draw() { System.out.println("Drawing circle r=" + radius); }\n        public void resize(double f) { radius *= f; System.out.println("Resized to r=" + radius); }\n    }\n    static abstract class Vehicle {\n        abstract String getFuelType();\n        void describe() { System.out.println("Vehicle runs on: " + getFuelType()); }\n    }\n    static class ElectricCar extends Vehicle {\n        String getFuelType() { return "Electricity"; }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5.0);\n        c.draw();\n        c.resize(2.0);\n        System.out.println("Color: " + c.getColor());\n        new ElectricCar().describe();\n    }\n}'
            },
            {
                title: "Exception Handling",
                aim: '<p><strong>Objective:</strong> Handle checked and unchecked exceptions in Java using try-catch-finally.</p><ul><li>Use try, catch, finally blocks.</li><li>Create custom exception classes.</li><li>Use throws and throw keywords.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter 0 in stdin to trigger ArithmeticException.</td></tr><tr><td>2</td><td>Enter -1 to trigger custom exception.</td></tr><tr><td>3</td><td>Observe finally block always executing.</td></tr></tbody></table>',
                pretest: [
                    { q: "Checked exceptions must be?", options: ["Ignored", "Caught or declared with throws", "Re-thrown only", "None"], a: 1 },
                    { q: "ArithmeticException is?", options: ["Checked", "Unchecked (RuntimeException)", "Error", "None"], a: 1 },
                    { q: "finally block executes?", options: ["Only if exception occurs", "Only if no exception", "Always", "Never in exception"], a: 2 },
                    { q: "Custom exception class should extend?", options: ["Object", "Throwable or Exception", "RuntimeException only", "Error"], a: 1 },
                    { q: "try-with-resources ensures?", options: ["No exceptions", "Auto close of resources", "No catch needed", "Faster execution"], a: 1 }
                ],
                posttest: [
                    { q: "Multi-catch in Java 7+?", options: ["catch(A | B e)", "catch(A, B e)", "catch(A & B e)", "Two catch blocks only"], a: 0 },
                    { q: "getMessage() is method of?", options: ["String", "Throwable", "Exception only", "Error only"], a: 1 },
                    { q: "StackOverflowError is?", options: ["Exception", "RuntimeException", "Error", "Throwable"], a: 2 },
                    { q: "throws keyword in method signature?", options: ["Throws exception", "Declares possible checked exceptions", "Handles exception", "None"], a: 1 },
                    { q: "Difference between throw and throws?", options: ["Same", "throw raises exception, throws declares", "throws raises, throw declares", "None"], a: 1 }
                ],
                reference: '<ul><li><em>Java: The Complete Reference</em> – Schildt</li><li><a href="https://docs.oracle.com/javase/tutorial/essential/exceptions/" target="_blank">Oracle Exception Tutorial</a></li></ul>',
                defaultCode: 'import java.util.Scanner;\n\nclass NegativeException extends Exception {\n    NegativeException(String msg) { super(msg); }\n}\n\npublic class Main {\n    static int divide(int a, int b) throws NegativeException {\n        if (b < 0) throw new NegativeException("Divisor cannot be negative!");\n        return a / b;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter two integers (a b):");\n        int a = sc.nextInt(), b = sc.nextInt();\n        try {\n            System.out.println("Result: " + divide(a, b));\n        } catch (ArithmeticException e) {\n            System.out.println("Math Error: " + e.getMessage());\n        } catch (NegativeException e) {\n            System.out.println("Custom Error: " + e.getMessage());\n        } finally {\n            System.out.println("finally block executed.");\n        }\n        sc.close();\n    }\n}'
            },
            {
                title: "String Manipulation",
                aim: '<p><strong>Objective:</strong> Explore Java String class methods, StringBuilder, and string formatting.</p><ul><li>Use String methods: length, substring, indexOf, replace.</li><li>Use StringBuilder for mutable strings.</li><li>Use String.format() for formatting.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a sentence in stdin.</td></tr><tr><td>2</td><td>Observe length, uppercase, word count operations.</td></tr></tbody></table>',
                pretest: [
                    { q: "Strings in Java are?", options: ["Mutable", "Immutable", "Primitive", "None"], a: 1 },
                    { q: "String comparison (content) uses?", options: ["==", ".equals()", ".compare()", ".same()"], a: 1 },
                    { q: "StringBuilder is?", options: ["Immutable", "Mutable", "Thread-safe", "Interface"], a: 1 },
                    { q: "str.substring(1,3) returns?", options: ["Index 1 to 3 inclusive", "Index 1 to 2", "Index 2 to 3", "Error"], a: 1 },
                    { q: "String.valueOf(42) returns?", options: ["int 42", "\"42\"", "42.0", "null"], a: 1 }
                ],
                posttest: [
                    { q: "str.split(\" \") splits on?", options: ["Comma", "Space", "Newline", "Tab"], a: 1 },
                    { q: "String pool stores?", options: ["All Strings", "String literals for reuse", "StringBuilder objects", "char arrays"], a: 1 },
                    { q: "StringBuffer vs StringBuilder?", options: ["No difference", "StringBuffer thread-safe, StringBuilder faster", "StringBuilder thread-safe", "Same performance"], a: 1 },
                    { q: "str.trim() removes?", options: ["All spaces", "Leading and trailing whitespace", "Internal spaces", "Special chars"], a: 1 },
                    { q: "str.charAt(0) returns?", options: ["String", "char at index 0", "int code", "substring"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html" target="_blank">Java String API</a></li><li><em>Java 8 in Action</em> – Urma, Fusco, Mycroft</li></ul>',
                defaultCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter a sentence:");\n        String s = sc.nextLine();\n        System.out.println("Length: " + s.length());\n        System.out.println("Uppercase: " + s.toUpperCase());\n        System.out.println("Words: " + s.trim().split("\\\\s+").length);\n        System.out.println("Reversed: " + new StringBuilder(s).reverse());\n        System.out.println("Contains \'a\': " + s.contains("a"));\n        System.out.printf("Formatted: \'%s\' has %d chars%n", s, s.length());\n        sc.close();\n    }\n}'
            },
            {
                title: "Collections Framework",
                aim: '<p><strong>Objective:</strong> Use Java Collections: HashMap, HashSet, LinkedList, and Collections utility class.</p><ul><li>Use HashMap for key-value storage.</li><li>Use HashSet for unique elements.</li><li>Use Collections.sort(), shuffle(), frequency().</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see HashMap word frequency count.</td></tr><tr><td>2</td><td>Observe HashSet eliminating duplicates.</td></tr></tbody></table>',
                pretest: [
                    { q: "HashMap allows duplicate keys?", options: ["Yes", "No, last value overwrites", "Yes with null", "Only null key"], a: 1 },
                    { q: "HashSet allows duplicates?", options: ["Yes", "No", "Only null", "Only primitives"], a: 1 },
                    { q: "LinkedList implements?", options: ["List only", "List and Deque", "Map", "Set"], a: 1 },
                    { q: "Collections.sort() sorts?", options: ["Maps", "Sets", "Lists", "Arrays"], a: 2 },
                    { q: "TreeMap sorts by?", options: ["Insertion order", "Natural key order", "Value order", "Hash order"], a: 1 }
                ],
                posttest: [
                    { q: "HashMap get() returns null when?", options: ["Value is null", "Key not found", "Both A and B", "Never"], a: 2 },
                    { q: "Iterator remove() vs List remove()?", options: ["Same", "Iterator remove is safe during iteration", "List remove is safe", "Neither safe"], a: 1 },
                    { q: "ConcurrentModificationException thrown when?", options: ["Null access", "Modifying collection during iteration", "Empty collection", "Type mismatch"], a: 1 },
                    { q: "PriorityQueue orders by?", options: ["Insertion", "Natural ordering (min-heap)", "Size", "Random"], a: 1 },
                    { q: "Collections.unmodifiableList() creates?", options: ["New list copy", "Read-only view", "Sorted list", "Thread-safe list"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html" target="_blank">Java Collections API</a></li><li><em>Java Generics and Collections</em> – Maurice Naftalin</li></ul>',
                defaultCode: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {"apple","banana","apple","cherry","banana","apple"};\n        Map<String,Integer> freq = new HashMap<>();\n        for (String w : words)\n            freq.put(w, freq.getOrDefault(w, 0) + 1);\n        System.out.println("Word Frequencies:");\n        freq.forEach((k,v) -> System.out.println("  " + k + ": " + v));\n\n        Set<Integer> set = new HashSet<>(Arrays.asList(1,2,2,3,3,3,4));\n        System.out.println("\\nUnique values: " + set);\n\n        List<String> list = new ArrayList<>(Arrays.asList("Zebra","Apple","Mango"));\n        Collections.sort(list);\n        System.out.println("Sorted: " + list);\n    }\n}'
            },
            {
                title: "Multithreading Basics",
                aim: '<p><strong>Objective:</strong> Create and manage threads in Java using Thread class and Runnable interface.</p><ul><li>Create threads by extending Thread.</li><li>Create threads using Runnable.</li><li>Understand thread lifecycle and synchronization basics.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe interleaved thread output.</td></tr><tr><td>2</td><td>Notice non-deterministic execution order.</td></tr></tbody></table>',
                pretest: [
                    { q: "Thread start method?", options: ["run()", "start()", "begin()", "execute()"], a: 1 },
                    { q: "Runnable interface method to implement?", options: ["start()", "execute()", "run()", "thread()"], a: 2 },
                    { q: "synchronized keyword prevents?", options: ["Thread creation", "Simultaneous access to block", "Thread termination", "None"], a: 1 },
                    { q: "Thread.sleep() throws?", options: ["IOException", "InterruptedException", "RuntimeException", "ThreadException"], a: 1 },
                    { q: "Daemon thread runs?", options: ["Indefinitely", "Until main thread ends", "Forever in background", "Only when JVM starts"], a: 1 }
                ],
                posttest: [
                    { q: "Race condition occurs when?", options: ["Single thread", "Multiple threads access shared state without synchronization", "Thread.sleep called", "Thread is daemon"], a: 1 },
                    { q: "join() method waits for?", options: ["Thread to start", "Thread to finish", "Thread to sleep", "Main to end"], a: 1 },
                    { q: "volatile keyword ensures?", options: ["Thread safety", "Visibility of variable across threads", "Atomicity", "Synchronization"], a: 1 },
                    { q: "ExecutorService manages?", options: ["File threads", "Thread pool", "Memory allocation", "Synchronization blocks"], a: 1 },
                    { q: "Deadlock occurs when?", options: ["One thread sleeps", "Two threads wait for each other's locks", "Thread pool full", "Race condition"], a: 1 }
                ],
                reference: '<ul><li><em>Java Concurrency in Practice</em> – Brian Goetz</li><li><a href="https://docs.oracle.com/javase/tutorial/essential/concurrency/" target="_blank">Oracle Concurrency Tutorial</a></li></ul>',
                defaultCode: 'public class Main {\n    static class Counter implements Runnable {\n        String name; int count;\n        Counter(String n, int c) { name = n; count = c; }\n        public void run() {\n            for (int i = 1; i <= count; i++) {\n                System.out.println(name + ": " + i);\n                try { Thread.sleep(100); } catch (InterruptedException e) {}\n            }\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Thread t1 = new Thread(new Counter("Thread-A", 5));\n        Thread t2 = new Thread(new Counter("Thread-B", 5));\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println("Both threads completed!");\n    }\n}'
            },
            {
                title: "Generics and Lambda Expressions",
                aim: '<p><strong>Objective:</strong> Write generic methods/classes and use lambda expressions and streams in Java 8+.</p><ul><li>Write generic methods using &lt;T&gt;.</li><li>Use lambda expressions and method references.</li><li>Use Stream API for functional-style operations.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see generic pair class.</td></tr><tr><td>2</td><td>Observe stream filter, map, and collect.</td></tr></tbody></table>',
                pretest: [
                    { q: "Lambda expression syntax?", options: ["(params) -> body", "(params) => body", "lambda params: body", "func(params){}"], a: 0 },
                    { q: "Stream.filter() returns?", options: ["List", "Stream", "Optional", "Collection"], a: 1 },
                    { q: "Method reference syntax?", options: ["Class::method", "Class.method()", "Class->method", "method@Class"], a: 0 },
                    { q: "Stream.collect(Collectors.toList()) returns?", options: ["Stream", "List", "Set", "Array"], a: 1 },
                    { q: "Optional is used to avoid?", options: ["ClassCastException", "NullPointerException", "IndexOutOfBoundsException", "IllegalArgumentException"], a: 1 }
                ],
                posttest: [
                    { q: "Stream.map() transforms?", options: ["Filter stream", "Each element to another", "Reduces to value", "Sorts stream"], a: 1 },
                    { q: "Stream.reduce() produces?", options: ["Stream", "Collection", "Single value", "Array"], a: 2 },
                    { q: "Predicate<T> functional interface has method?", options: ["apply()", "test()", "accept()", "get()"], a: 1 },
                    { q: "Streams are?", options: ["Reusable", "Consumed once", "Mutable collections", "Always parallel"], a: 1 },
                    { q: "Stream.sorted() sorts?", options: ["In place", "Returns new sorted stream", "Returns List", "Modifies source"], a: 1 }
                ],
                reference: '<ul><li><em>Java 8 in Action</em> – Urma, Fusco, Mycroft</li><li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html" target="_blank">Java Stream API</a></li></ul>',
                defaultCode: 'import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static <T> void printPair(T a, T b) {\n        System.out.println("Pair: (" + a + ", " + b + ")");\n    }\n    public static void main(String[] args) {\n        printPair("Hello", "World");\n        printPair(42, 99);\n\n        List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        List<Integer> evens = nums.stream()\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * n)\n            .collect(Collectors.toList());\n        System.out.println("Even squares: " + evens);\n\n        int sum = nums.stream().reduce(0, Integer::sum);\n        System.out.println("Sum 1-10: " + sum);\n\n        nums.stream().sorted(Comparator.reverseOrder()).limit(3)\n            .forEach(System.out::println);\n    }\n}'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PYTHON PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    python: {
        name: "Python Programming",
        experiments: [
            {
                title: "Dynamic Typing and Basic I/O",
                aim: '<p><strong>Objective:</strong> Write Python scripts demonstrating dynamic typing, input() function, and f-strings.</p><ul><li>Execute scripts without compilation.</li><li>Understand dynamic typing.</li><li>Format output using f-strings.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter name and age in stdin.</td></tr><tr><td>2</td><td>Observe dynamic type and f-string output.</td></tr></tbody></table>',
                pretest: [
                    { q: "Python input() always returns?", options: ["int", "float", "str", "depends"], a: 2 },
                    { q: "Python comment symbol?", options: ["//", "/**/", "#", "--"], a: 2 },
                    { q: "f-string syntax?", options: ["f'{var}'", "'{var}'.f", "format(var)", "${var}"], a: 0 },
                    { q: "Python is?", options: ["Statically typed", "Dynamically typed", "Weakly typed only", "Untyped"], a: 1 },
                    { q: "print() with sep parameter?", options: ["Sets end character", "Sets separator between args", "Formats number", "None"], a: 1 }
                ],
                posttest: [
                    { q: "type('hello') returns?", options: ["string", "<class 'str'>", "str", "String"], a: 1 },
                    { q: "int('42') + int('8') = ?", options: ["'428'", "50", "Error", "'4208'"], a: 1 },
                    { q: "print(end='') does?", options: ["Adds newline", "Removes default newline", "Adds tab", "None"], a: 1 },
                    { q: "Multi-line string in Python?", options: ["'line1\\nline2'", "\"\"\"multi line\"\"\"", "Both", "Neither"], a: 2 },
                    { q: "name = input() blocks until?", options: ["Program ends", "User presses Enter", "1 second passes", "Never"], a: 1 }
                ],
                reference: '<ul><li><em>Python Crash Course</em> – Eric Matthes</li><li><a href="https://docs.python.org/3/tutorial/" target="_blank">Python Official Tutorial</a></li></ul>',
                defaultCode: 'name = input("Enter your name: ")\nage_str = input("Enter your age: ")\nage = int(age_str)\nprint(f"\\nHello, {name}!")\nprint(f"You are {age} years old.")\nprint(f"In 10 years: {age + 10}")\nprint(f"Type of name: {type(name).__name__}")\nprint(f"Type of age: {type(age).__name__}")'
            },
            {
                title: "Control Flow: if-elif-else and Loops",
                aim: '<p><strong>Objective:</strong> Master Python conditional statements and looping constructs.</p><ul><li>Use if-elif-else for branching.</li><li>Write for and while loops.</li><li>Use range(), break, continue, and pass.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a number in stdin.</td></tr><tr><td>2</td><td>Observe grade and loop output.</td></tr></tbody></table>',
                pretest: [
                    { q: "Python uses indentation for?", options: ["Style only", "Block structure", "Comments", "Variables"], a: 1 },
                    { q: "range(1, 5) produces?", options: ["1,2,3,4,5", "1,2,3,4", "0,1,2,3,4", "1,2,3,4,5,6"], a: 1 },
                    { q: "pass statement does?", options: ["Exits loop", "Nothing (placeholder)", "Continues loop", "Returns None"], a: 1 },
                    { q: "elif keyword means?", options: ["else if", "else only", "end if", "exit if"], a: 0 },
                    { q: "for x in range(5) iterates?", options: ["1 to 5", "0 to 4", "0 to 5", "1 to 4"], a: 1 }
                ],
                posttest: [
                    { q: "while True with break is?", options: ["Infinite loop with conditional exit", "Always infinite", "Compile error", "Logic error"], a: 0 },
                    { q: "for i in [1,2,3] iterates over?", options: ["Indices", "Values", "Both", "Length"], a: 1 },
                    { q: "Ternary in Python?", options: ["a?b:c", "b if a else c", "if a then b else c", "a and b or c"], a: 1 },
                    { q: "enumerate() provides?", options: ["Values only", "(index, value) pairs", "Indices only", "Reversed order"], a: 1 },
                    { q: "range(10, 0, -2) produces?", options: ["10,8,6,4,2", "10,8,6,4,2,0", "2,4,6,8,10", "0,2,4,6,8,10"], a: 0 }
                ],
                reference: '<ul><li><em>Automate the Boring Stuff with Python</em> – Al Sweigart</li><li><a href="https://realpython.com/python-conditional-statements/" target="_blank">RealPython – Conditionals</a></li></ul>',
                defaultCode: 'marks = int(input("Enter marks (0-100): "))\nif marks >= 90:\n    print("Grade: A")\nelif marks >= 75:\n    print("Grade: B")\nelif marks >= 60:\n    print("Grade: C")\nelse:\n    print("Grade: F")\n\nprint("\\nPrime numbers up to 30:")\nfor num in range(2, 31):\n    is_prime = all(num % i != 0 for i in range(2, int(num**0.5)+1))\n    if is_prime:\n        print(num, end=" ")\nprint()'
            },
            {
                title: "Lists, Tuples and Slicing",
                aim: '<p><strong>Objective:</strong> Work with Python lists and tuples, including slicing and comprehensions.</p><ul><li>Create and modify lists.</li><li>Use list methods: append, pop, sort, reverse.</li><li>Use tuple immutability and slicing.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see list operations.</td></tr><tr><td>2</td><td>Observe slicing syntax.</td></tr><tr><td>3</td><td>Note tuple immutability.</td></tr></tbody></table>',
                pretest: [
                    { q: "Python list is?", options: ["Immutable", "Mutable ordered collection", "Unique elements only", "Fixed size"], a: 1 },
                    { q: "Tuple is?", options: ["Mutable", "Immutable ordered collection", "Unordered", "Like set"], a: 1 },
                    { q: "lst[1:4] gives?", options: ["Index 1,2,3,4", "Index 1,2,3", "Index 0,1,2,3", "Index 2,3,4"], a: 1 },
                    { q: "lst[-1] gives?", options: ["Error", "First element", "Last element", "Length-1"], a: 2 },
                    { q: "list.append() vs list.extend()?", options: ["Same", "append adds single item, extend adds iterable", "extend adds single item", "append adds iterable"], a: 1 }
                ],
                posttest: [
                    { q: "len([1,2,3]) = ?", options: ["2", "3", "4", "0"], a: 1 },
                    { q: "Sorted list of [3,1,2] using sorted()?", options: ["Modifies original", "Returns new sorted list", "Returns tuple", "Error"], a: 1 },
                    { q: "Unpacking: a,b,c = [1,2,3]?", options: ["Error", "a=1,b=2,c=3", "a=[1,2,3]", "a=3,b=2,c=1"], a: 1 },
                    { q: "List * 3 does?", options: ["Multiply elements", "Repeat list 3 times", "Power of 3", "Error"], a: 1 },
                    { q: "Nested list [1,[2,3],4][1][0] = ?", options: ["1", "2", "3", "[2,3]"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/tutorial/datastructures.html" target="_blank">Python Data Structures</a></li><li><em>Fluent Python</em> – Luciano Ramalho</li></ul>',
                defaultCode: '# Lists\nfruits = ["banana", "apple", "cherry", "mango"]\nprint("Original:", fruits)\nfruits.append("grape")\nfruits.sort()\nprint("Sorted:", fruits)\nprint("Slice [1:3]:", fruits[1:3])\nprint("Reversed:", fruits[::-1])\n\n# Tuple\ncoords = (10, 20, 30)\nprint("\\nTuple:", coords)\nprint("Sum:", sum(coords))\nx, y, z = coords\nprint(f"Unpacked: x={x}, y={y}, z={z}")\n\n# List comprehension\nsquares = [x**2 for x in range(1, 6)]\nprint("\\nSquares:", squares)'
            },
            {
                title: "Dictionaries and Sets",
                aim: '<p><strong>Objective:</strong> Use Python dictionaries for key-value storage and sets for unique collections.</p><ul><li>Create, update, and iterate dictionaries.</li><li>Use dict.get(), keys(), values(), items().</li><li>Perform set operations: union, intersection, difference.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see student record dictionary.</td></tr><tr><td>2</td><td>Observe set operations output.</td></tr></tbody></table>',
                pretest: [
                    { q: "Dictionary key must be?", options: ["String only", "Hashable/immutable", "Integer only", "Any type"], a: 1 },
                    { q: "dict.get('key', default) returns?", options: ["Error if missing", "Value or default if missing", "None always", "Empty string"], a: 1 },
                    { q: "Set is?", options: ["Ordered unique", "Unordered unique", "Ordered duplicates", "Key-value pairs"], a: 1 },
                    { q: "dict.items() returns?", options: ["Keys only", "Values only", "(key, value) pairs", "Length"], a: 2 },
                    { q: "Set union operator?", options: ["&", "|", "+", "^"], a: 1 }
                ],
                posttest: [
                    { q: "Duplicate key in dict?", options: ["Error", "Last value kept", "First value kept", "Both stored"], a: 1 },
                    { q: "Set intersection A & B returns?", options: ["Elements in A or B", "Elements in both A and B", "Elements in A not B", "All elements"], a: 1 },
                    { q: "dict comprehension syntax?", options: ["{k:v for k,v in items}", "[k:v for k,v in items]", "(k:v for k,v in items)", "{k,v for k,v in items}"], a: 0 },
                    { q: "frozenset is?", options: ["Mutable set", "Immutable set", "Ordered set", "Dict subset"], a: 1 },
                    { q: "Checking key in dict?", options: ["dict.has(key)", "key in dict", "dict.contains(key)", "dict.check(key)"], a: 1 }
                ],
                reference: '<ul><li><a href="https://realpython.com/python-dicts/" target="_blank">RealPython – Dictionaries</a></li><li><em>Python Cookbook</em> – Beazley &amp; Jones</li></ul>',
                defaultCode: '# Dictionary\nstudent = {"name": "Alice", "age": 21, "gpa": 3.8}\nprint("Student:", student)\nstudent["major"] = "CS"\nprint("After adding major:", student)\nprint("Name:", student.get("name", "Unknown"))\nprint("Keys:", list(student.keys()))\n\n# Iteration\nfor k, v in student.items():\n    print(f"  {k}: {v}")\n\n# Sets\nA = {1, 2, 3, 4, 5}\nB = {3, 4, 5, 6, 7}\nprint("\\nUnion:", A | B)\nprint("Intersection:", A & B)\nprint("Difference A-B:", A - B)\nprint("Symmetric diff:", A ^ B)'
            },
            {
                title: "Functions, *args and **kwargs",
                aim: '<p><strong>Objective:</strong> Define Python functions with default, variable, and keyword arguments; understand closures and decorators.</p><ul><li>Use *args for variable positional args.</li><li>Use **kwargs for keyword arguments.</li><li>Write simple decorators.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see *args and **kwargs behavior.</td></tr><tr><td>2</td><td>Observe decorator wrapping.</td></tr></tbody></table>',
                pretest: [
                    { q: "Default parameter syntax?", options: ["def f(x=5)", "def f(x:5)", "def f(x==5)", "def f(default x=5)"], a: 0 },
                    { q: "*args allows?", options: ["Keyword arguments", "Variable positional arguments", "Only 2 args", "Named args only"], a: 1 },
                    { q: "**kwargs is of type?", options: ["list", "tuple", "dict", "set"], a: 2 },
                    { q: "Lambda function syntax?", options: ["lambda x: x*2", "func x: x*2", "f = (x) => x*2", "def lambda x:x*2"], a: 0 },
                    { q: "return without value returns?", options: ["0", "False", "None", "Error"], a: 2 }
                ],
                posttest: [
                    { q: "Closure captures?", options: ["Global variables", "Variables from enclosing scope", "Local only", "Class attributes"], a: 1 },
                    { q: "Decorator @ syntax does?", options: ["Comments", "Wraps function with another", "Creates class", "Defines property"], a: 1 },
                    { q: "functools.wraps used in decorators to?", options: ["Speed up function", "Preserve wrapped function metadata", "Copy function", "Remove decorator"], a: 1 },
                    { q: "First-class functions mean?", options: ["Main functions only", "Functions as values/arguments/returns", "Static methods", "Global functions only"], a: 1 },
                    { q: "Generator function uses?", options: ["return", "yield", "produce", "send"], a: 1 }
                ],
                reference: '<ul><li><em>Fluent Python</em> – Luciano Ramalho</li><li><a href="https://realpython.com/primer-on-python-decorators/" target="_blank">RealPython – Decorators</a></li></ul>',
                defaultCode: 'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\ndef total(*args):\n    return sum(args)\n\ndef profile(**kwargs):\n    for k, v in kwargs.items():\n        print(f"  {k}: {v}")\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}...")\n        result = func(*args, **kwargs)\n        print("Done!")\n        return result\n    return wrapper\n\n@timer\ndef add(a, b): return a + b\n\nprint(greet("Alice"))\nprint(greet("Bob", "Hi"))\nprint("Total:", total(1, 2, 3, 4, 5))\nprofile(name="Alice", age=21, gpa=3.9)\nprint("Add result:", add(10, 20))'
            },
            {
                title: "Object-Oriented Programming",
                aim: '<p><strong>Objective:</strong> Implement OOP concepts: classes, inheritance, encapsulation, and polymorphism in Python.</p><ul><li>Define classes with __init__, methods, and properties.</li><li>Implement inheritance using super().</li><li>Use dunder methods (__str__, __len__).</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe class hierarchy.</td></tr><tr><td>2</td><td>See polymorphic speak() calls.</td></tr></tbody></table>',
                pretest: [
                    { q: "self in Python class methods refers to?", options: ["Global scope", "Current instance", "Class itself", "Parent class"], a: 1 },
                    { q: "__init__ is called when?", options: ["Class defined", "Object created", "Method called", "Program starts"], a: 1 },
                    { q: "Name mangling with __ (double underscore)?", options: ["Makes public", "Makes truly private", "Makes protected", "Makes static"], a: 1 },
                    { q: "super() calls?", options: ["Sibling class", "Parent class", "Grandparent class", "Object class"], a: 1 },
                    { q: "@property decorator creates?", options: ["Static method", "Class method", "Getter property", "Setter only"], a: 2 }
                ],
                posttest: [
                    { q: "__str__ is called by?", options: ["repr()", "str()/print()", "len()", "hash()"], a: 1 },
                    { q: "isinstance(obj, ClassName) checks?", options: ["Exact type", "Type or subclass", "Only subclass", "Only exact type"], a: 1 },
                    { q: "@classmethod first parameter is?", options: ["self", "cls", "class", "type"], a: 1 },
                    { q: "@staticmethod has access to?", options: ["Instance and class", "Class only", "Neither instance nor class", "Instance only"], a: 2 },
                    { q: "Multiple inheritance in Python?", options: ["Not supported", "Supported with MRO (C3 linearization)", "Only 2 parents", "Only interfaces"], a: 1 }
                ],
                reference: '<ul><li><em>Python 3 Object-Oriented Programming</em> – Dusty Phillips</li><li><a href="https://realpython.com/python3-object-oriented-programming/" target="_blank">RealPython – OOP</a></li></ul>',
                defaultCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f"{self.name} makes a sound."\n    def __str__(self):\n        return f"Animal({self.name})"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\nclass BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance  # private\n    @property\n    def balance(self): return self.__balance\n    def deposit(self, amt): self.__balance += amt\n\nanimals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]\nfor a in animals:\n    print(a.speak())\n\nacc = BankAccount("Alice", 1000)\nacc.deposit(500)\nprint(f"\\n{acc.owner}\'s balance: {acc.balance}")'
            },
            {
                title: "File Handling and JSON",
                aim: '<p><strong>Objective:</strong> Read, write, and process files in Python; serialize data using JSON module.</p><ul><li>Use open(), read(), write(), with statement.</li><li>Use json.dumps() and json.loads().</li><li>Handle file exceptions with try-except.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see file write and read.</td></tr><tr><td>2</td><td>Observe JSON serialization/deserialization.</td></tr></tbody></table>',
                pretest: [
                    { q: "with open() ensures?", options: ["Fast read", "Auto close file", "Binary mode", "Append mode"], a: 1 },
                    { q: "File mode 'a' means?", options: ["Read", "Write (overwrite)", "Append", "Binary"], a: 2 },
                    { q: "json.dumps() converts?", options: ["JSON string to dict", "Dict to JSON string", "File to JSON", "None"], a: 1 },
                    { q: "readlines() returns?", options: ["One line string", "List of lines", "Generator", "None"], a: 1 },
                    { q: "File exception for missing file?", options: ["ValueError", "TypeError", "FileNotFoundError", "IOError"], a: 2 }
                ],
                posttest: [
                    { q: "json.loads() converts?", options: ["Dict to JSON", "JSON string to Python object", "File to dict", "None"], a: 1 },
                    { q: "open(file, 'rb') opens?", options: ["Read text", "Read binary", "Write binary", "Random binary"], a: 1 },
                    { q: "file.seek(0) does?", options: ["Closes file", "Moves to start", "Reads one char", "Flushes buffer"], a: 1 },
                    { q: "CSV handling in Python uses?", options: ["json module", "csv module", "file module", "io module"], a: 1 },
                    { q: "Pickling in Python?", options: ["Text serialization", "Binary serialization of objects", "JSON encoding", "XML encoding"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/library/json.html" target="_blank">Python JSON Module</a></li><li><em>Python Cookbook</em> – Beazley &amp; Jones</li></ul>',
                defaultCode: 'import json\n\n# Write file\nwith open("students.txt", "w") as f:\n    f.write("Alice\\n")\n    f.write("Bob\\n")\n    f.write("Carol\\n")\n\n# Read file\nprint("File contents:")\nwith open("students.txt", "r") as f:\n    for line in f:\n        print(" ", line.strip())\n\n# JSON\ndata = {"name": "Alice", "age": 21, "courses": ["CS101", "CS201"]}\njson_str = json.dumps(data, indent=2)\nprint("\\nJSON String:\\n", json_str)\n\nparsed = json.loads(json_str)\nprint("\\nParsed name:", parsed["name"])\nprint("Courses:", parsed["courses"])'
            },
            {
                title: "Exception Handling",
                aim: '<p><strong>Objective:</strong> Handle exceptions in Python using try, except, else, finally, and custom exceptions.</p><ul><li>Catch specific and generic exceptions.</li><li>Use else and finally blocks.</li><li>Create and raise custom exception classes.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter 0 in stdin to trigger ZeroDivisionError.</td></tr><tr><td>2</td><td>Enter a letter to trigger ValueError.</td></tr><tr><td>3</td><td>Enter valid numbers for normal flow.</td></tr></tbody></table>',
                pretest: [
                    { q: "Syntax for catching exceptions in Python?", options: ["try/catch", "try/except", "begin/rescue", "error/handle"], a: 1 },
                    { q: "else in try-except runs when?", options: ["Exception occurs", "No exception occurs", "Always", "Never"], a: 1 },
                    { q: "raise keyword?", options: ["Catches exception", "Raises exception", "Logs exception", "Ignores exception"], a: 1 },
                    { q: "BaseException is?", options: ["Specific exception", "Root of exception hierarchy", "User exception", "None"], a: 1 },
                    { q: "except Exception as e gives?", options: ["Type of exception", "Exception instance", "Error code", "None"], a: 1 }
                ],
                posttest: [
                    { q: "except (TypeError, ValueError) catches?", options: ["TypeError only", "ValueError only", "Both", "Neither"], a: 2 },
                    { q: "Custom exception class inherits from?", options: ["object", "Exception or its subclass", "BaseException only", "Error"], a: 1 },
                    { q: "finally runs even if?", options: ["No exception", "Exception occurs", "Return in try", "All above"], a: 3 },
                    { q: "assert statement raises?", options: ["ValueError", "AssertionError", "RuntimeError", "SyntaxError"], a: 1 },
                    { q: "Context manager __exit__ is called?", options: ["Only on success", "Only on exception", "Always when leaving with block", "Never"], a: 2 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/tutorial/errors.html" target="_blank">Python Errors and Exceptions</a></li><li><em>Python Tricks</em> – Dan Bader</li></ul>',
                defaultCode: 'class NegativeValueError(Exception):\n    def __init__(self, val):\n        super().__init__(f"Negative value not allowed: {val}")\n\ndef safe_sqrt(n):\n    if n < 0:\n        raise NegativeValueError(n)\n    return n ** 0.5\n\ntry:\n    a = float(input("Enter first number: "))\n    b = float(input("Enter second number: "))\n    print(f"Division: {a/b:.4f}")\n    print(f"Sqrt(a): {safe_sqrt(a):.4f}")\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero!")\nexcept ValueError:\n    print("Error: Please enter valid numbers!")\nexcept NegativeValueError as e:\n    print(f"Custom Error: {e}")\nelse:\n    print("All operations successful!")\nfinally:\n    print("Program execution complete.")'
            },
            {
                title: "List Comprehensions and Generators",
                aim: '<p><strong>Objective:</strong> Write Pythonic code using list/dict/set comprehensions and generator functions.</p><ul><li>Write list comprehensions with conditions.</li><li>Use generator expressions for memory efficiency.</li><li>Compare comprehensions vs loops.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see various comprehensions.</td></tr><tr><td>2</td><td>Observe generator lazy evaluation.</td></tr></tbody></table>',
                pretest: [
                    { q: "List comprehension syntax?", options: ["[x for x in lst]", "{x for x in lst}", "(x for x in lst)", "list(x for x in lst)"], a: 0 },
                    { q: "Generator expression uses?", options: ["[]", "{}", "()", "yield"], a: 2 },
                    { q: "yield in a function makes it?", options: ["A class", "A generator", "A decorator", "A lambda"], a: 1 },
                    { q: "Set comprehension uses?", options: ["[]", "{}", "()", "set()"], a: 1 },
                    { q: "Generator is evaluated?", options: ["Eagerly", "Lazily (on demand)", "Never", "At definition"], a: 1 }
                ],
                posttest: [
                    { q: "[x**2 for x in range(5) if x%2==0] = ?", options: ["[0,4,16]", "[0,1,4,9,16]", "[4,16]", "[0,4]"], a: 0 },
                    { q: "Dict comprehension: {k:v for k,v in pairs}?", options: ["Creates list", "Creates dict", "Creates set", "Error"], a: 1 },
                    { q: "next() on generator?", options: ["Restarts generator", "Returns next yielded value", "Returns list", "Raises error always"], a: 1 },
                    { q: "Memory advantage of generators?", options: ["Faster CPU", "Don't store all values in memory", "Better type safety", "None"], a: 1 },
                    { q: "itertools module provides?", options: ["File I/O tools", "Advanced iteration utilities", "Math functions", "String tools"], a: 1 }
                ],
                reference: '<ul><li><em>Fluent Python</em> – Luciano Ramalho</li><li><a href="https://realpython.com/list-comprehension-python/" target="_blank">RealPython – Comprehensions</a></li></ul>',
                defaultCode: 'import itertools\n\nnums = range(1, 11)\n\n# List comprehension\nsquares = [x**2 for x in nums]\nprint("Squares:", squares)\n\n# Filtered comprehension\nevens = [x for x in nums if x % 2 == 0]\nprint("Evens:", evens)\n\n# Dict comprehension\nsq_dict = {x: x**2 for x in range(1, 6)}\nprint("Square dict:", sq_dict)\n\n# Set comprehension\nunique = {x % 5 for x in range(20)}\nprint("Unique remainders mod 5:", unique)\n\n# Generator\ndef fibonacci_gen():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a+b\n\nfib = fibonacci_gen()\nprint("First 10 Fibonacci:", [next(fib) for _ in range(10)])'
            },
            {
                title: "Modules, Packages and Standard Library",
                aim: '<p><strong>Objective:</strong> Use Python\'s standard library modules and understand module/package structure.</p><ul><li>Import and use math, os, sys, datetime, random modules.</li><li>Create custom modules.</li><li>Understand __name__ == "__main__".</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see standard library usage.</td></tr><tr><td>2</td><td>Observe math, random, datetime outputs.</td></tr></tbody></table>',
                pretest: [
                    { q: "import math; math.sqrt(16) = ?", options: ["4", "4.0", "2.0", "Error"], a: 1 },
                    { q: "__name__ == '__main__' is True when?", options: ["Module imported", "Script run directly", "Always", "Never"], a: 1 },
                    { q: "from math import * imports?", options: ["Nothing", "All public names from math", "Only sqrt", "Module object"], a: 1 },
                    { q: "os.path.join() creates?", options: ["URL", "OS-independent file path", "Zip file", "Database path"], a: 1 },
                    { q: "random.randint(1,10) returns?", options: ["Float 1-10", "Int 1-10 inclusive", "Int 1-9", "Float 0-1"], a: 1 }
                ],
                posttest: [
                    { q: "sys.argv[0] contains?", options: ["First argument", "Script name", "Python version", "None"], a: 1 },
                    { q: "datetime.now() returns?", options: ["String", "datetime object", "Timestamp int", "None"], a: 1 },
                    { q: "collections.Counter counts?", options: ["Lines in file", "Element frequencies", "File size", "Errors"], a: 1 },
                    { q: "pathlib.Path is preferred over os.path because?", options: ["Faster", "Object-oriented path handling", "Cross-platform only", "No difference"], a: 1 },
                    { q: "Package __init__.py purpose?", options: ["Main program entry", "Marks directory as package", "Imports all modules", "Defines classes"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/library/" target="_blank">Python Standard Library</a></li><li><em>Python Module of the Week</em> – Doug Hellmann</li></ul>',
                defaultCode: 'import math\nimport random\nimport os\nfrom datetime import datetime\nfrom collections import Counter\n\nprint("=== Math Module ===")\nprint(f"pi = {math.pi:.4f}")\nprint(f"sqrt(144) = {math.sqrt(144)}")\nprint(f"ceil(4.2) = {math.ceil(4.2)}")\n\nprint("\\n=== Random Module ===")\nprint(f"randint(1,100): {random.randint(1,100)}")\nitems = ["apple", "banana", "cherry"]\nrandom.shuffle(items)\nprint(f"Shuffled: {items}")\n\nprint("\\n=== Datetime ===")\nnow = datetime.now()\nprint(f"Now: {now.strftime(\'%Y-%m-%d %H:%M:%S\')}")\n\nprint("\\n=== Counter ===")\nwords = "the quick brown fox jumps over the lazy dog".split()\nc = Counter(words)\nprint(f"Most common: {c.most_common(3)}")'
            }
        ]
    }
};

// ─── Sections ────────────────────────────────────────────────────────────────

var sections = [
    { id: 'aim',        title: 'Aim' },
    { id: 'procedure',  title: 'Procedure' },
    { id: 'pretest',    title: 'Pre-Test' },
    { id: 'simulation', title: 'Simulation' },
    { id: 'posttest',   title: 'Post-Test' },
    { id: 'reference',  title: 'Reference' },
    { id: 'feedback',   title: 'Feedback' }
];

// ─── State ───────────────────────────────────────────────────────────────────

var currentLang       = null;
var currentExpIndex   = null;
var currentSection    = null;
var editorInstance    = null;

var appDiv = document.getElementById('app');

// ─── Navigation ──────────────────────────────────────────────────────────────

function navigateTo(lang, expIndex, section) {
    currentLang     = lang;
    currentExpIndex = expIndex;
    currentSection  = section;
    if (!lang) {
        renderHome();
    } else if (expIndex === null || expIndex === undefined) {
        renderExperimentList();
    } else {
        renderLab();
    }
}
window.navigateTo = navigateTo;

// ─── Home Page ───────────────────────────────────────────────────────────────

function renderHome() {
    currentLang = null; currentExpIndex = null; currentSection = null;

    appDiv.innerHTML =
        '<div class="home-scroll-wrapper">' +

        '<section class="hero-section">' +
            '<h1 class="hero-title">Virtual Programming Laboratory</h1>' +
            '<p class="hero-subtitle">Master Data Structures, Algorithms, and Core Computer Science through 40 structured experiments with real-time code execution and automated assessments.</p>' +
            '<button class="hero-cta" onclick="document.getElementById(\'labs\').scrollIntoView({behavior:\'smooth\'})">Explore Labs</button>' +
        '</section>' +

        '<section class="features-section">' +
            '<div class="features-grid">' +
                '<div class="feature-card"><div class="feature-icon">⚡</div><h3>40 Experiments</h3><p>10 structured experiments per language covering fundamentals to advanced topics.</p></div>' +
                '<div class="feature-card"><div class="feature-icon">📊</div><h3>MCQ Assessments</h3><p>Built-in Pre-Test and Post-Test with instant automated grading for every experiment.</p></div>' +
                '<div class="feature-card"><div class="feature-icon">🎓</div><h3>Real-time Execution</h3><p>Write and run C, C++, Java, Python code instantly with live terminal output.</p></div>' +
            '</div>' +
        '</section>' +

        '<section id="labs" class="labs-section">' +
            '<h2 class="labs-section-title">Available Laboratory Modules</h2>' +
            '<div class="lang-grid">' +
                makeLangCard('c',      'C',      'C Programming',      'Systems programming, pointers, memory management, data structures, and algorithms.') +
                makeLangCard('cpp',    'C++',    'C++ Programming',     'OOP, templates, STL, exceptions, operator overloading, and smart pointers.') +
                makeLangCard('java',   'Java',   'Java Programming',    'Classes, inheritance, collections, concurrency, generics, and lambda expressions.') +
                makeLangCard('python', 'Python', 'Python Programming',  'Dynamic typing, OOP, comprehensions, modules, and the Python standard library.') +
            '</div>' +
        '</section>' +
        '</div>';
}

function makeLangCard(lang, label, title, desc) {
    return '<div class="lang-card">' +
        '<div class="lang-card-header lang-' + lang + '">' + label + '</div>' +
        '<div class="lang-card-body">' +
            '<h3>' + title + '</h3>' +
            '<p>' + desc + '</p>' +
            '<button class="launch-btn" onclick="navigateTo(\'' + lang + '\', null, null)">Open Lab →</button>' +
        '</div>' +
    '</div>';
}

// ─── Experiment List Page ─────────────────────────────────────────────────────

function renderExperimentList() {
    currentSection = null;
    var lang = labData[currentLang];
    var html = '';

    for (var i = 0; i < lang.experiments.length; i++) {
        var exp = lang.experiments[i];
        var idx = i;
        html +=
            '<div class="exp-card" onclick="navigateTo(\'' + currentLang + '\', ' + idx + ', \'aim\')">' +
                '<div class="exp-number">Exp ' + (i+1) + '</div>' +
                '<div class="exp-info">' +
                    '<h3>' + exp.title + '</h3>' +
                    '<span class="exp-tag">7 Sections</span>' +
                '</div>' +
                '<div class="exp-arrow">→</div>' +
            '</div>';
    }

    appDiv.innerHTML =
        '<div class="exp-list-page">' +
            '<div class="exp-list-header">' +
                '<button class="back-btn" onclick="navigateTo(null, null, null)">← Back to Languages</button>' +
                '<h2>' + lang.name + ' Laboratory</h2>' +
                '<p>Select an experiment to begin</p>' +
            '</div>' +
            '<div class="exp-list">' + html + '</div>' +
        '</div>';
}

// ─── Lab Page ────────────────────────────────────────────────────────────────

function renderLab() {
    var langData = labData[currentLang];
    var exp = langData.experiments[currentExpIndex];

    var sidebarHtml = '';
    for (var i = 0; i < sections.length; i++) {
        var sec = sections[i];
        var active = currentSection === sec.id ? ' active' : '';
        sidebarHtml +=
            '<div class="nav-item' + active + '" onclick="navigateTo(\'' + currentLang + '\', ' + currentExpIndex + ', \'' + sec.id + '\')">' +
                sec.title +
            '</div>';
    }

    var contentHtml = '';

    if (currentSection === 'aim') {
        contentHtml = '<div class="section-container"><h2 class="section-title">Aim</h2><div class="content-body">' + exp.aim + '</div></div>';

    } else if (currentSection === 'procedure') {
        contentHtml = '<div class="section-container"><h2 class="section-title">Procedure</h2><div class="content-body">' + exp.procedure + '</div></div>';

    } else if (currentSection === 'reference') {
        contentHtml = '<div class="section-container"><h2 class="section-title">Reference</h2><div class="content-body">' + exp.reference + '</div></div>';

    } else if (currentSection === 'pretest' || currentSection === 'posttest') {
        var testData = exp[currentSection];
        var title = currentSection === 'pretest' ? 'Pre-Test Evaluation' : 'Post-Test Evaluation';
        var questionsHtml = '';
        for (var qi = 0; qi < testData.length; qi++) {
            var q = testData[qi];
            var optionsHtml = '';
            for (var oi = 0; oi < q.options.length; oi++) {
                optionsHtml +=
                    '<label class="option-label">' +
                        '<input type="radio" name="q_' + qi + '" value="' + oi + '"> ' +
                        q.options[oi] +
                    '</label>';
            }
            questionsHtml +=
                '<div class="question-block" id="qblock_' + qi + '">' +
                    '<div class="question-text">' + (qi+1) + '. ' + q.q + '</div>' +
                    '<div class="options-group">' + optionsHtml + '</div>' +
                '</div>';
        }
        contentHtml =
            '<div class="section-container"><h2 class="section-title">' + title + '</h2>' +
            '<div class="content-body"><p>Select the correct option and click Submit.</p>' +
            '<div class="test-form" id="testForm">' + questionsHtml +
            '<button class="submit-btn" onclick="checkAnswers(\'' + currentSection + '\')">Submit Assessment</button>' +
            '<div id="testResult" class="result-msg"></div>' +
            '</div></div></div>';

    } else if (currentSection === 'feedback') {
        contentHtml =
            '<div class="section-container"><h2 class="section-title">Experiment Feedback</h2><div class="content-body"><div class="test-form">' +
            '<div class="form-group"><label>Student Name</label><input type="text" class="form-control" id="fbName" placeholder="Your full name"></div>' +
            '<div class="form-group"><label>Email Address</label><input type="email" class="form-control" id="fbEmail" placeholder="Your email"></div>' +
            '<div class="form-group"><label>Rating (1-5)</label><select class="form-control" id="fbRating"><option value="5">5 - Excellent</option><option value="4">4 - Very Good</option><option value="3">3 - Good</option><option value="2">2 - Fair</option><option value="1">1 - Poor</option></select></div>' +
            '<div class="form-group"><label>Comments</label><textarea class="form-control" id="fbComments" rows="4" placeholder="Your feedback..."></textarea></div>' +
            '<button class="submit-btn" onclick="submitFeedback()">Submit Feedback</button>' +
            '<div id="feedbackResult" class="result-msg" style="display:none;margin-top:1rem;"></div>' +
            '</div></div></div>';

    } else if (currentSection === 'simulation') {
        contentHtml =
            '<h2 class="section-title" style="margin:0 0 1rem 0;font-size:1.5rem;color:#1e293b;flex-shrink:0;">Simulation Environment</h2>' +
            '<div class="simulation-container">' +
            '<div id="editor" class="editor-wrapper"></div>' +
            '<div class="sim-controls">' +
                '<div class="input-box"><label for="stdin">Standard Input (stdin)</label><textarea id="stdin" class="stdin-textarea" placeholder="Enter input for scanf/cin/input()..."></textarea></div>' +
                '<div class="actions"><button class="run-btn" onclick="runCode()">▶ Run Code</button><button class="clear-btn" onclick="clearTerminal()">Clear Output</button></div>' +
            '</div>' +
            '<div id="terminal" class="terminal-wrapper">Compiler output will appear here...</div>' +
            '</div>';
    }

    appDiv.innerHTML =
        '<div class="lab-layout">' +
            '<div class="sidebar">' +
                '<div class="sidebar-header">' +
                    '<div style="font-size:0.7rem;color:#94a3b8;margin-bottom:4px;">Exp ' + (currentExpIndex+1) + ' of ' + langData.experiments.length + '</div>' +
                    '<h3>' + langData.name + '</h3>' +
                '</div>' +
                sidebarHtml +
            '</div>' +
            '<div class="lab-content">' +
                '<div class="content-header">' +
                    '<button class="back-btn" onclick="navigateTo(\'' + currentLang + '\', null, null)">← All Experiments</button>' +
                    '<span style="font-size:0.9rem;color:#64748b;font-weight:500;">Exp ' + (currentExpIndex+1) + ': ' + exp.title + '</span>' +
                '</div>' +
                contentHtml +
            '</div>' +
        '</div>';

    if (currentSection === 'simulation') initEditor(exp);
}

// ─── MCQ Grading ─────────────────────────────────────────────────────────────

function checkAnswers(sectionType) {
    var exp = labData[currentLang].experiments[currentExpIndex];
    var testData = exp[sectionType];
    var score = 0;
    for (var i = 0; i < testData.length; i++) {
        var radios = document.getElementsByName('q_' + i);
        var selected = -1;
        for (var r = 0; r < radios.length; r++) {
            if (radios[r].checked) { selected = parseInt(radios[r].value); break; }
        }
        var block = document.getElementById('qblock_' + i);
        if (selected === testData[i].a) {
            score++;
            block.style.borderColor = '#10b981';
            block.style.backgroundColor = '#ecfdf5';
        } else {
            block.style.borderColor = '#ef4444';
            block.style.backgroundColor = '#fef2f2';
        }
    }
    var resultDiv = document.getElementById('testResult');
    resultDiv.style.display = 'block';
    if (score === testData.length) {
        resultDiv.textContent = 'Excellent! You scored ' + score + '/' + testData.length + '. Perfect score!';
        resultDiv.className = 'result-msg success';
    } else {
        resultDiv.textContent = 'You scored ' + score + '/' + testData.length + '. Review the highlighted questions.';
        resultDiv.className = 'result-msg error';
    }
}
window.checkAnswers = checkAnswers;

// ─── Feedback ────────────────────────────────────────────────────────────────

function submitFeedback() {
    var name = document.getElementById('fbName').value.trim();
    var resultDiv = document.getElementById('feedbackResult');
    if (!name) {
        resultDiv.textContent = 'Please enter your name.';
        resultDiv.className = 'result-msg error';
        resultDiv.style.display = 'block';
        return;
    }
    resultDiv.textContent = 'Thank you, ' + name + '! Feedback recorded.';
    resultDiv.className = 'result-msg success';
    resultDiv.style.display = 'block';
    document.getElementById('fbName').value = '';
    document.getElementById('fbEmail').value = '';
    document.getElementById('fbComments').value = '';
    document.getElementById('fbRating').value = '5';
}
window.submitFeedback = submitFeedback;

// ─── Monaco Editor ───────────────────────────────────────────────────────────

function initEditor(exp) {
    if (editorInstance) {
        var models = monaco.editor.getModels();
        models.forEach(function(m) { m.dispose(); });
        editorInstance.dispose();
        editorInstance = null;
    }
    var editorDiv = document.getElementById('editor');
    if (!editorDiv) return;
    editorDiv.innerHTML = '';
    require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs' } });
    require(['vs/editor/editor.main'], function() {
        var monacoLang = (currentLang === 'c' || currentLang === 'cpp') ? 'cpp' : currentLang;
        editorInstance = monaco.editor.create(editorDiv, {
            value: exp.defaultCode,
            language: monacoLang,
            theme: 'vs-light',
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 15,
            padding: { top: 16 }
        });
    });
}

// ─── Terminal ────────────────────────────────────────────────────────────────

function clearTerminal() {
    var t = document.getElementById('terminal');
    if (t) t.textContent = '';
}
window.clearTerminal = clearTerminal;

// ─── Code Execution ───────────────────────────────────────────────────────────

function runCode() {
    if (!editorInstance) return;
    var code = editorInstance.getValue();
    var stdinValue = document.getElementById('stdin').value;
    var terminal = document.getElementById('terminal');
    terminal.textContent = 'Compiling and running...\n(Please wait a few seconds)';
    terminal.style.color = '#38bdf8';

    var exp = labData[currentLang].experiments[currentExpIndex];
    var pistonLangMap = { c: 'c', cpp: 'cpp', java: 'java', python: 'python' };
    var pistonVersionMap = { c: '10.2.0', cpp: '10.2.0', java: '15.0.2', python: '3.10.0' };

    fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            language: pistonLangMap[currentLang],
            version: pistonVersionMap[currentLang],
            files: [{ content: code }],
            stdin: stdinValue
        })
    })
    .then(function(res) {
        if (!res.ok) {
            terminal.style.color = '#ef4444';
            terminal.textContent = 'Server error ' + res.status + '. Please try again.';
            return null;
        }
        return res.json();
    })
    .then(function(data) {
        if (!data) return;
        if (!data.run) {
            terminal.style.color = '#ef4444';
            terminal.textContent = 'Error: ' + (data.message || 'Unknown error from server.');
            return;
        }
        if (data.run.stderr && data.run.stderr.trim() !== '') {
            terminal.style.color = '#ef4444';
            terminal.textContent = data.run.stderr + (data.run.stdout ? '\n' + data.run.stdout : '');
        } else {
            terminal.style.color = '#f8fafc';
            terminal.textContent = data.run.stdout || 'Program exited with no output.';
        }
    })
    .catch(function(err) {
        terminal.style.color = '#ef4444';
        terminal.textContent = 'Network Error: ' + err.message;
    });
}
window.runCode = runCode;

// ─── Boot ─────────────────────────────────────────────────────────────────────

renderHome();
