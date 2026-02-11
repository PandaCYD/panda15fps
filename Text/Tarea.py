# ============================================
# EJERCICIO 1: Raíz cúbica de 125
# ============================================
print("=" * 50)
print("EJERCICIO 1: Raiz cubica de 125")
print("=" * 50)

num = 125
raiz3 = num ** (1/3)
print(f"La raiz cubica de {num} es: {raiz3}")
print()

# ============================================
# EJERCICIO 2: Convertir 15.67 km a centímetros
# ============================================
print("=" * 50)
print("EJERCICIO 2: Convertir 15.67 km a centimetros")
print("=" * 50)

km = 15.67
cm = km * 100000  # 1 km = 100,000 cm
print(f"{km} km = {cm:,.0f} centimetros")
print()

# ============================================
# EJERCICIO 3: Mostrar nombre cada letra en una fila
# ============================================
print("=" * 50)
print("EJERCICIO 3: Nombre letra por letra")
print("=" * 50)

nom = "Panda"

print(f"Nombre: {nom}\n") # \n es un salto de linea
for letra in nom: # Itera cada letra en la cadena
    print(letra)
print()

# ============================================
# EJERCICIO 4: Calcular área de un trapecio
# ============================================
print("=" * 50)
print("EJERCICIO 4: Area de un trapecio")
print("=" * 50)

# Fórmula: A = ((base_mayor + base_menor) * altura) / 2
base_mayor = 15.5  # soles
base_menor = 10.2  # soles
altura = 8.0       # soles

##base_mayor = float(input("Ingrese la base mayor del trapecio: "))  Usa esto en caso tengas acceso al input
##base_menor = float(input("Ingrese la base menor del trapecio: "))  Usa esto en caso tengas acceso al input
##altura = float(input("Ingrese la altura del trapecio: "))  Usa esto en caso tengas acceso al input

area_trapecio = ((base_mayor + base_menor) * altura) / 2
print(f"El area del trapecio de base mayor {base_mayor}, base menor {base_menor} y altura {altura} es: {area_trapecio}")
print()


# ============================================
# EJERCICIO 5: Cálculo de IGV y total a pagar
# ============================================
print("=" * 50)
print("EJERCICIO 5: Panadería - IGV y Total")
print("=" * 50)

panes = 200  # soles
leche = 48   # soles
jamonada = 25  # soles

subtotal = panes + leche + jamonada
igv_porcentaje = 0.18
igv = subtotal * igv_porcentaje
total = subtotal + igv

print(f"Panes: S/ {panes:.2f}")
print(f"Leche: S/ {leche:.2f}")
print(f"Jamonada: S/ {jamonada:.2f}")
print(f"Subtotal: S/ {subtotal:.2f}")
print(f"IGV (18%): S/ {igv:.2f}")
print(f"Total a pagar: S/ {total:.2f}")
print()


# ============================================
# EJERCICIO 6: Calcular (a+b)²
# ============================================
print("=" * 50)
print("EJERCICIO 6: Calcular (a+b)²")
print("=" * 50)

a = 10
b = 5
resultado = (a + b) ** 2

print(f"a = {a}")
print(f"b = {b}")
print(f"(a + b)² = ({a} + {b})² = {resultado}")
print()


