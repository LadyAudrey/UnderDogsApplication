# Program to create a list for all of the words containing a Q but not a U?

# importing the word list
sow_pods = open("/home/evergreen/UD/.idea/SowPods")

# Go through each word in the file and add it to the list, words
words = []
for line in sow_pods:
    words.append(line.strip())

# Creating variables
QnoU = []

for w in words:
    if ("Q" in w) and ("U" not in w):
        QnoU.append(w)

print("This is all of the words containing Qs and no Us:\n" + str(QnoU))
