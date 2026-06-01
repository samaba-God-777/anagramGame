"""
Proyecto Final - Sistema de Gestión de Almacén

Autor: Tu Nombre
Descripción:
Sistema que permite registrar productos,
controlar precios, calcular compras y
mostrar reportes básicos mediante un menú interactivo.
"""

# Lista para almacenar los productos
productos = []


# -----------------------------
# FUNCIONES
# -----------------------------

def agregar_producto():
    """Permite agregar un producto al almacén"""

    nombre = input("Nombre del producto: ")

    try:
        precio = float(input("Precio: "))
        cantidad = int(input("Cantidad: "))

        producto = {
            "nombre": nombre,
            "precio": precio,
            "cantidad": cantidad
        }

        productos.append(producto)

        print("\nProducto agregado correctamente.\n")

    except ValueError:
        print("Error: Debe ingresar valores numéricos válidos.")


def mostrar_productos():
    """Muestra todos los productos registrados"""

    if len(productos) == 0:
        print("\nNo hay productos registrados.\n")
        return

    print("\n===== INVENTARIO =====")

    for i, producto in enumerate(productos, start=1):
        print(
            f"{i}. {producto['nombre']} | "
            f"Precio: ${producto['precio']:.2f} | "
            f"Cantidad: {producto['cantidad']}"
        )

    print()


def calcular_total_inventario():
    """Calcula el valor total del inventario"""

    total = 0

    for producto in productos:
        total += producto["precio"] * producto["cantidad"]

    print(f"\nValor total del inventario: ${total:.2f}\n")


def realizar_compra():
    """Permite comprar productos"""

    if len(productos) == 0:
        print("\nNo existen productos disponibles.\n")
        return

    total_compra = 0

    while True:

        mostrar_productos()

        opcion = input(
            "Ingrese el número del producto "
            "(0 para finalizar compra): "
        )

        if opcion == "0":
            break

        try:
            indice = int(opcion) - 1

            if indice < 0 or indice >= len(productos):
                print("Producto no válido.")
                continue

            cantidad = int(input("Cantidad a comprar: "))

            if cantidad <= 0:
                print("Cantidad inválida.")
                continue

            producto = productos[indice]

            if cantidad > producto["cantidad"]:
                print("Stock insuficiente.")
                continue

            subtotal = cantidad * producto["precio"]

            producto["cantidad"] -= cantidad
            total_compra += subtotal

            print(
                f"Agregado: {cantidad} x "
                f"{producto['nombre']} = ${subtotal:.2f}"
            )

        except ValueError:
            print("Debe ingresar números válidos.")

    # Aplicar descuento
    descuento = 0

    if total_compra >= 500:
        descuento = total_compra * 0.15
    elif total_compra >= 200:
        descuento = total_compra * 0.10
    elif total_compra >= 100:
        descuento = total_compra * 0.05
    else:
        pass

    total_final = total_compra - descuento

    print("\n===== FACTURA =====")
    print(f"Subtotal: ${total_compra:.2f}")
    print(f"Descuento: ${descuento:.2f}")
    print(f"Total a pagar: ${total_final:.2f}\n")


def reporte_productos():
    """Genera un reporte básico"""

    if not productos:
        print("\nNo existen productos registrados.\n")
        return

    print("\n===== REPORTE =====")

    total_productos = len(productos)

    producto_mas_caro = productos[0]

    for producto in productos:

        if producto["precio"] > producto_mas_caro["precio"]:
            producto_mas_caro = producto

    print(f"Cantidad de productos: {total_productos}")

    print(
        f"Producto más caro: "
        f"{producto_mas_caro['nombre']} "
        f"(${producto_mas_caro['precio']:.2f})"
    )

    print()


# -----------------------------
# MENÚ PRINCIPAL
# -----------------------------

while True:

    print("================================")
    print(" SISTEMA DE GESTIÓN DE ALMACÉN ")
    print("================================")
    print("1. Agregar producto")
    print("2. Mostrar productos")
    print("3. Calcular valor del inventario")
    print("4. Realizar compra")
    print("5. Reporte básico")
    print("6. Salir")
    print("================================")

    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        agregar_producto()

    elif opcion == "2":
        mostrar_productos()

    elif opcion == "3":
        calcular_total_inventario()

    elif opcion == "4":
        realizar_compra()

    elif opcion == "5":
        reporte_productos()

    elif opcion == "6":
        print("\nGracias por utilizar el sistema.")
        break

    else:
        print("\nOpción inválida.\n")