# toy program to find the country with the shortest name

# importing the country list
countries = open("/home/evergreen/UnderDogsAssignments/Countries/countries.txt")

#turning countries.doc into an array
countries_list = []
for line in countries:
    countries_list.append(line.strip())

# Find the shortest country name  in the list of countries_list
shortest = 'United States of America'
length = len(shortest)
for country in countries_list:
    if len(country) < length:
        shortest = country
        length = len(shortest)

print(str(shortest) + " is the shortest country name")