from sympy import symbols, Eq, solve

# Define the symbols (variables) used in the expressions
x = symbols('x')

# Define the two expressions to compare
# Example: 2*x + 3 = 7
expr1 = 2*x + 3
expr2 = 7

# Create an equation by setting the two expressions equal
equation = Eq(expr1, expr2)

# Solve the equation for the unknown variable (x in this case)
solution = solve(equation, x)

# Output the solution
print(f'The value of x that satisfies the equation is: {solution}')