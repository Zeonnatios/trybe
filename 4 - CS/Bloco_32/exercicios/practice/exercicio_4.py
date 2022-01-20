def find_higher_name(names):
    higher_name = names[0]
    for name in names:
        if len(name) > len(higher_name):
            higher_name = name
    return higher_name


array_names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print(find_higher_name(array_names))
