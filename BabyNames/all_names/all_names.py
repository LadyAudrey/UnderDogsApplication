#making a list of both the 2020s and 1920s names

# importing the 2020 names list
names = open("/home/evergreen/UnderDogsAssignments/BabyNames/baby_names_2020_short.txt")

#turning names.doc into an array
names2020 = []
for line in names:
    names2020.append(line.strip())

# importing the 1880s list
old_names = open("/home/evergreen/UnderDogsAssignments/BabyNames/baby_names_1880_short.txt")

#turning names.doc into an array
names1880 = []
for line in old_names:
    names1880.append(line.strip())

print("The favorite baby names from 1880 and 2020 are " + str(names1880), str(names2020))
