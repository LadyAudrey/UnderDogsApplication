#find all the shortest name in the 2020 list

# importing the country list
names = open("/home/evergreen/UnderDogsAssignments/BabyNames/baby_names_2020_short.txt")

#turning countries.doc into an array
names2020= []
for line in names:
    names2020.append(line.strip())

# Find the shortest name in names2020
shortest = 'Theodore'
for name in names2020:
    if len(name) < len(shortest):
        shortest = name

print(str(shortest) + " is the shortest name in the top 40 names for 2020")

# Find the longest name in names2020
longest = 'Leo'
for name in names2020:
    if len(name) > len(longest):
        longest = name

print(str(longest) + " is the longest name in the top 40 names for 2020")