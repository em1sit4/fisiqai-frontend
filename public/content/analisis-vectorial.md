# Análisis vectorial

<div style="width: 100%; margin: .5rem 0;"></div>

El análisis vectorial es una rama de las matemáticas que estudia los vectores y las operaciones que se pueden realizar con ellos en el contexto de campos escalares y vectoriales.

<br />

### Vector unitario

<div style="width: 100%; margin: .5rem 0;"></div>

Un vector unitario es un vector con magnitud 1, no tiene unidades y su único fin es especificar una dirección.

En un sistema de coordenadas $\text{x-y}$ el vector unitario $i$ tiene la dirección del eje $+x$ (horizontal) y el vector $j$ la dirección $+y$ (vertical)

Para hallar el vector unitario utilizamos la siguiente fórmula:

<br />

$$
\widehat{v} = \frac{v}{|v|}
$$

<br />

### Módulo y dirección de un vector

<div style="width: 100%; margin: .5rem 0;"></div>

El módulo de un vector $P$, también llamado su magnitud, es la medida de su longitud en el espacio. Para un vector bidimensional $P = (P_x, P_y)$, el módulo se calcula como la raíz cuadrada de la suma de los cuadrados de sus componentes:

<br />

<div style="width: 100%; display: flex; justify-content: center;">
  <img src="/images/av1.png" width=300 height=300 style="" />
</div>

<br />

$$
P = \sqrt{P_x^2 + P_y^2}
$$

<br />

La dirección de un vector $v$ es el ángulo $\theta$ que forma con el eje $x$ (u otro eje de referencia) en el plano. Para un vector bidimensional $P = (P_x, P_y)$, la dirección se obtiene mediante la tangente del ángulo:

<br />

$$
\theta = \arctan\left( \frac{P_y}{P_x} \right)
$$

<br />

En la calculadora: $\arctan\left( \right) = \tan^{-1}( )$

<br />

### Descomposición rectangular de un vector

<div style="width: 100%; margin: .5rem 0;"></div>

Vamos a seguir usando el vector $P$ el cual puede representarse como la suma de dos vectores que se encuentran sobre los ejes $x$ e $y$ respectivamente:

<br />

<div style="width: 100%; display: flex; justify-content: center;">
  <img src="/images/av2.png" width=300 height=300 style="" />
</div>

<br />

$$
\overrightarrow{P} = \overrightarrow{P_x} + \overrightarrow{P_y}
$$

$$
\overrightarrow{P} = \overrightarrow{P_x}\widehat{\imath} + \overrightarrow{P_y}\widehat{\jmath}
$$

$$
P_x = P\cos\theta \space \wedge \space P_y = P\sin\theta
$$

$$
\overrightarrow{P} = P\cos\theta\widehat{\imath} + P\sin\theta\widehat{\jmath}
$$

<br />

### Adición y sustracción de vectores

<div style="width: 100%; margin: .5rem 0;"></div>

La adición y sustracción de vectores se realiza sumando o restando las componentes correspondientes. Para dos vectores $\mathbf{A} = (A_x, A_y, A_z)$ y $\mathbf{B} = (B_x, B_y, B_z)$, la operación se realiza de la siguiente manera:

<br />

$$
A \pm B = (A_x \pm B_x) \widehat{\imath} + (A_y \pm B_y) \widehat{\jmath} + (A_z \pm B_z) \widehat{k}
$$

<br />

### Metodo del paralelogramo

<div style="width: 100%; margin: .5rem 0;"></div>

Este método tiene la restricción de usarse solo para sumar dos vectores. Pero, si son más de dos los vectores a sumar, y queremos aplicar este método, entonces debemos empezar sumando dos vectores, el resultado sumarlo a un tercero y así hasta terminar el proceso.

<br />

<div style="width: 100%; display: flex; justify-content: center;">
  <img src="/images/av3.png" width=300 style="" />
</div>

<br />

$$
|R| = R = |\overrightarrow{A} + \overrightarrow{B}| = \sqrt{A^2 + B^2 + 2AB\cos(\theta)}
$$

<br />

La dirección de $\overrightarrow{R}$ se encuentra hallando $\gamma$, para esto de la **Ley de los Senos**, llegamos a:

$$
\gamma = \arcsin(\frac{B}{R}\sin(\theta))
$$

<br />
