# elementos separados por vírgula, envolvidos por chaves
permissions = {"member", "group"}

permissions.add("root")  # adiciona um novo elemento ao conjunto

# como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.add("member")

permissions.union({"user"})  # retorna um conjunto resultado da união

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
