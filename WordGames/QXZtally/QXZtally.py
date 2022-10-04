# Create and compare a tally of how often Q, X and Z are used, with a final print statement of which is least common

# importing the word list
sow_pods = open("/home/evergreen/UD/.idea/SowPods")

# Go through each word in the file and add it to the list, words
words = []
for line in sow_pods:
    words.append(line.strip())

#Tallying how often Q, X and Z are used
Q = 0
X = 0
Z = 0

# Loop through the list for each letter
# take the tally of how many times it's used in a word and add that int to it's counter
for q in words:
    if "Q" in q:
        Q = Q + q.count('Q')

for x in words:
    if "X" in x:
        X = X + x.count('X')

for z in words:
    if "Z" in z:
        Z = Z + z.count('Z')
        
# Compare the int of Q, X and Z, print the most used letter with a statemen
print("Q is " + str(Q))
print("X is " + str(X))
print("Z is " + str(Z))

if (Q < X and Z):
    print("Q is the least used of these letters")
elif (Z < Q and X):
    print("Z is the least used of these letters")
elif (X < Q and Z):
    print("X is the least used of these letters")
else:
    print("We're not sure what's going on here")