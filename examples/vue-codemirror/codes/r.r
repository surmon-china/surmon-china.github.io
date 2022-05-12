X <- list(height = 5.4, weight = 54)
cat("Printing objects: "); print(X)
print("Accessing individual elements:")
cat(sprintf("Your height is %s and your weight is %s\n", X$height, X$weight))

# Functions:
square <- function(x) {
  return(x * x)
}
cat(sprintf("The square of 3 is %s\n", square(3)))

# In R, the last expression in a function is, by default, what is
# returned. The idiomatic way to write the function is:
square <- function(x) {
  x * x
}
# or, for functions with short content:
square <- function(x) x * x

# Function arguments with default values:
cube <- function(x = 5) x * x * x
cat(sprintf("Calling cube with 2 : %s\n", cube(2))  # will give 2^3
cat(sprintf("Calling cube        : %s\n", cube())   # will default to 5^3.

powers <- function(x) list(x2 = x*x, x3 = x*x*x, x4 = x*x*x*x)

cat("Powers of 3: "); print(powers(3))

# Data frames
df <- data.frame(letters = letters[1:5], '#letter' = 1:5)
print(df$letters)
print(df$`#letter`)

# Operators:
m1 <- matrix(1:6, 2, 3)
m2 <- m1 %*% t(m1)
cat("Matrix product: "); print(m2)

# Assignments:
a <- 1
b <<- 2
c = 3
4 -> d
5 ->> e
