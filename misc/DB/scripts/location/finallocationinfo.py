# Add rec areas to states that don't have national parks
all_loc = open("alllocationdata.txt", "r")
no_nat_park_loc = open("staterecareas.txt", "r")

no_nat_park_iter = iter(no_nat_park_loc)
next_park = next(no_nat_park_iter)

for line in all_loc:
    values = line.split("|")
    mailcode = values[7]
    if values:
        mailcode = values[7]
        print(mailcode)

all_loc.close()