
# 🦷 Manual Técnico de **SOFTWARE DENTIGRIN**

## 🎯 Bienvenido a Dentigrin

**Dentigrin** es una plataforma integral para la gestión de clínicas odontológicas, diseñada para facilitar la administración de citas, pacientes y expedientes médicos.

> "Organiza, optimiza y transforma la experiencia de tu clínica."

---

## 🚀 Características Principales

- 🗓️ Gestión de Citas
- 👤 Administración de Perfiles de Usuario
- 📊 Dashboard para Administradores
- 🖥️ Interfaz Intuitiva y Amigable
- 📚 Generación de Reportes de Historia Clínica *(escalable a microservicios)*
- ⚙️ Configuración del Sistema *(pensado para microservicios)*

---

## ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js
- pnpm
- PostgreSQL

¡Ahora sí, manos a la obra! 🛠️

---

## 🧩 Tecnologías Utilizadas

| Tecnología | Función |
|:-----------|:--------|
| **React.js** | Construcción del front-end. |
| **Vite** | Optimización de entorno de desarrollo. |
| **Node.js** | Ejecución del servidor back-end. |
| **Express.js** | Framework para APIs eficientes. |
| **PostgreSQL** | Base de datos robusta y segura. |
| **Sequelize** | ORM para PostgreSQL. |
| **Docker** | Contenerización para despliegues uniformes. |
| **Vercel** | Despliegue del front-end. |
| **Supabase** | Backend serverless. |
| **Railway** | Hosting sencillo de servidores y bases de datos. |

---

## 📋 Estándares y Buenas Prácticas

- Código limpio y modular ✨
- Documentación clara y completa 📚
- Control de versiones usando Git/GitHub 🔗
- Seguridad de datos sensibles 🔒
- Accesibilidad para todos los usuarios 🧑‍💻

---

# 📚 Diagramas de Caso de Uso

*(Diagramas ilustrativos en construcción.)*

---

# 🗺️ Modelo Entidad-Relación (DER)

*(Visualización de relaciones entre entidades próximamente disponible.)*

---

# 🛠️ Modelo Lógico de la Base de Datos

*(Modelado lógico próximo a publicarse.)*

---

# 📖 Diccionario de Datos

### Pacientes
- `id_paciente`: ID del paciente
- `nombres`, `apellidos`: Datos personales
- `edad`, `fecha_nacimiento`: Información de nacimiento
- `eps`: Entidad prestadora de salud
- `direccion_residencia`, `numero_contacto`, `email`: Información de contacto
- `genero`, `ocupacion`: Perfil del paciente

### Odontólogos
- `id_odontologo`: ID del odontólogo
- `nombres`, `apellidos`, `direccion_residencia`
- `genero`, `especializacion`

### Administradores
- `id_administrador`: ID del administrador
- `nombres`, `apellidos`, `correo`, `numero_contacto`

### Historia Clínica
- `id_historia_clinica`: ID único de historia clínica
- `id_usuario`: Relación con paciente
- `fecha_consulta`, `diagnostico`, `tratamientos`

---

# 🛠️ Guías de Instalación y Despliegue

### Front-end
- [Tutorial de despliegue en Vercel](https://youtu.be/fZa0_OML1Zc)

### Back-end
- [Tutorial de despliegue en Railway](https://youtu.be/_qMEFWmKr_I)

### Base de Datos
- [Guía de hosting en Supabase](https://youtu.be/kiQ0TeclesA)

---

# 🗄️ Definiciones y Operaciones en Base de Datos

## DDL - Definición de Tablas

*(En desarrollo.)*

## DML - Operaciones sobre Datos

*(Insert, update y delete próximamente.)*

---

# 🧩 Diagrama de Componentes

*(Diagramas visuales de los módulos pronto disponibles.)*

---

# 🤝 Aportes y Colaboraciones

Dentigrin es un proyecto de **código abierto**. ¡Nos encantaría recibir tus contribuciones! Sigue este paso a paso para colaborar de manera correcta:

## 🛠️ ¿Cómo enviar un Pull Request?

1. **Haz un fork** del repositorio.
2. **Clona tu fork** a tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/dentigrin.git
   ```
3. **Crea una nueva rama** para tu cambio:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
4. **Realiza tus cambios** y **haz commits claros**:
   ```bash
   git add .
   git commit -m "Descripción breve de tu cambio"
   ```
5. **Sincroniza tu fork** en caso de actualizaciones:
   ```bash
   git pull origin main
   ```
6. **Envía tu rama al repositorio en GitHub**:
   ```bash
   git push origin nombre-de-tu-rama
   ```
7. **Abre un Pull Request** (PR) desde GitHub explicando brevemente qué mejoras o correcciones has realizado.
8. **Espera la revisión** de tu PR por parte del equipo de mantenimiento.

🔒 **Importante:** Ningún cambio pasa directo a producción sin inspección previa.

¡Gracias por contribuir al crecimiento de Dentigrin! 💙🦷

---

> 🚀 **Consejo Dentigrin:** Construido para crecer contigo: modular, escalable, seguro y eficiente. ¡Transforma la gestión de tu clínica hoy mismo! 🦷
