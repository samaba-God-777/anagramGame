# English Tenses — Interactive Learning Platform

## Descripción General

Crea una aplicación web educativa e interactiva para aprender gramática inglesa. Debe ser completamente funcional usando solo HTML, CSS y JavaScript puro (sin frameworks, sin backend, sin librerías externas). Todo el progreso, estadísticas y configuración se almacenan en LocalStorage.

---

## Módulo Base: 12 Tiempos Verbales

### Tiempos incluidos

1. Present Simple
2. Present Continuous
3. Present Perfect
4. Present Perfect Continuous
5. Past Simple
6. Past Continuous
7. Past Perfect
8. Past Perfect Continuous
9. Future Simple
10. Future Continuous
11. Future Perfect
12. Future Perfect Continuous

### Características por tiempo verbal

Cada tiempo debe incluir:

#### Teoría completa
- Descripción general del tiempo verbal
- Usos principales (cada uso con título, explicación y ejemplos)
- Estructura gramatical (afirmativa, negativa, preguntas)
- Tabla de conjugación
- Ejemplos (5 por cada forma: afirmativa, negativa, interrogativa)
- Palabras clave (signal words)
- Errores comunes (con incorrecto → correcto + explicación)
- Comparación con tiempos similares
- Notas importantes

#### Práctica interactiva
- Juego de arrastrar y soltar (drag & drop) para construir oraciones
- Las palabras aparecen desordenadas; el estudiante debe ordenarlas
- Sistema de verificación: comparar la oración construida con la correcta
- Feedback visual inmediato (correcto = verde + confeti, incorrecto = rojo + shake)
- Sistema de pistas progresivas (revelar palabra por palabra)
- Botones: Check, Reset, New, Hint, Theory
- Navegación entre formas: Affirmative, Negative, Questions

#### Seguimiento de progreso
- Score total
- Intentos realizados
- Racha actual (streak)
- Mejor racha
- Porcentaje de precisión
- Progreso por tiempo/forma (ej: 3/5 completado)
- Barra de progreso visual
- Persistencia en LocalStorage

---

## Interfaz de Usuario

### Diseño y Estilo
- Diseño moderno y limpio
- Paleta de colores profesional con variables CSS
- Dark mode completo (toggle + detección de preferencia del sistema)
- Diseño responsivo (escritorio, tablet, móvil)
- Animaciones suaves (entrada de palabras, feedback, confeti)
- Soporte para prefers-reduced-motion

### Navegación
- Sidebar con todos los tiempos verbales agrupados (Present, Past, Future)
- Cada grupo expandible para mostrar Affirmative/Negative/Questions
- Navbar superior con enlaces rápidos a todos los tiempos
- Sistema de tabs (Theory, Affirmative, Negative, Questions)
- Breadcrumb mostrando tiempo y forma actual

### Atajos de Teclado
- Enter: Check
- R: Reset
- N: New sentence
- H: Hint
- T: Theory
- Escape: Cerrar sidebar

---

# Módulo Avanzado de Gramática

## Clauses (Cláusulas)

### Noun Clauses

Explicar:

* Qué son las Noun Clauses
* Cómo funcionan como sujeto
* Cómo funcionan como objeto
* Cómo funcionan como complemento

Ejemplos:

* What she said is true.
* I know that he is coming.
* Whoever arrives first will win.

Incluir:

* Teoría
* Ejemplos
* Ejercicios
* Quiz interactivos

---

### Adjective Clauses (Relative Clauses)

Explicar:

* Defining Relative Clauses
* Non-defining Relative Clauses

Pronombres relativos:

* Who
* Whom
* Whose
* Which
* That
* Where
* When

Ejemplos:

* The boy who won the race is my friend.
* The car that I bought is new.

Actividades:

* Completar espacios
* Seleccionar pronombre correcto
* Construcción de oraciones

---

### Adverb Clauses

Explicar cláusulas de:

#### Time

* When
* While
* Before
* After
* Since
* Until

#### Cause

* Because
* Since
* As

#### Condition

* If
* Unless
* Provided that

#### Contrast

* Although
* Though
* Even though

#### Purpose

* So that
* In order that

Ejemplos y ejercicios interactivos.

---

## Prepositions

### Tipos de Preposiciones

#### Time

* At
* On
* In
* During
* Since
* For

#### Place

* In
* On
* At
* Under
* Behind
* Between
* Next to
* Across from

#### Movement

* To
* Into
* Onto
* Through
* Across
* Toward

Actividades:

* Selección múltiple
* Arrastrar y soltar
* Completar espacios

---

# Juegos Educativos

## 1. Anagram Game

Sistema para reorganizar letras y formar palabras.

Ejemplo:

```text
T A C
```

Respuesta:

```text
CAT
```

Niveles:

* Beginner
* Intermediate
* Advanced

Categorías:

* Animals
* Food
* Jobs
* Verbs
* Adjectives
* Phrasal Verbs

Características:

* Temporizador
* Pistas
* Sistema de puntos
* Ranking local

---

## 2. Sentence Unscramble

Arreglar oraciones desordenadas.

Ejemplo:

```text
school / goes / she / to / every day
```

Respuesta:

```text
She goes to school every day.
```

Niveles:

* Básico
* Intermedio
* Avanzado

Modo Drag & Drop usando JavaScript.

---

## 3. Grammar Builder

El estudiante recibe palabras mezcladas.

Ejemplo:

```text
playing / are / football / they
```

Debe construir:

```text
They are playing football.
```

Evaluación automática.

---

## 4. Clause Builder

Construir cláusulas correctamente.

Ejemplo:

```text
who / won / race / the
```

Respuesta:

```text
who won the race
```

Tipos:

* Noun Clauses
* Adjective Clauses
* Adverb Clauses

---

## 5. Error Correction Game

Detectar errores gramaticales.

Ejemplo:

```text
She go to school every day.
```

Respuesta:

```text
She goes to school every day.
```

Errores incluidos:

* Verb Tenses
* Articles
* Prepositions
* Pronouns
* Clauses
* Subject-Verb Agreement

---

## 6. Word Order Challenge

Organizar palabras según la estructura correcta del inglés.

Patrones:

* S + V + O
* S + V + C
* S + V + O + O
* S + V + O + C

---

## 7. Preposition Challenge

Completar la preposición correcta.

Ejemplo:

```text
The book is ___ the table.
```

Opciones:

* in
* on
* at
* under

---

## 8. Clause Identification Game

Identificar el tipo de cláusula.

Ejemplo:

```text
I know that she is happy.
```

Respuesta:

```text
Noun Clause
```

---

## 9. Verb Tense Challenge

Identificar el tiempo verbal.

Ejemplo:

```text
She has been studying.
```

Respuesta:

```text
Present Perfect Continuous
```

---

## 10. Daily Challenge System

Generar automáticamente:

* 10 preguntas diarias
* 5 ejercicios de gramática
* 2 anagramas
* 2 oraciones desordenadas
* 1 examen rápido

Guardar resultados en LocalStorage.

---

# Motor Inteligente de Aprendizaje

La aplicación debe:

* Detectar errores frecuentes.
* Recomendar lecciones automáticamente.
* Mostrar estadísticas por tema.
* Crear ejercicios personalizados según debilidades.
* Incrementar dificultad progresivamente.

---

# Requisitos Técnicos

- **Stack:** Solo HTML, CSS y JavaScript vanilla (0 dependencias externas)
- **Persistencia:** LocalStorage para progreso, estadísticas, configuración y logros
- **Sin servidor:** Funciona completamente offline, sin backend
- **Responsive:** Adaptable a todos los tamaños de pantalla
- **Accesibilidad:** Soporte para lectores de pantalla, navegación por teclado
- **Rendimiento:** Animaciones optimizadas, transiciones suaves
- **Sin emojis en código:** Los emojis son solo para interfaz de usuario, no para comentarios
