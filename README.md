# GRUPO 9 Ejercicio Guiado: Implementación de CI/CD con GitHub Actions: Validación, Auto-Merge y Despliegue en GitHub Pages

# 🚀 demo-nodejs-ci-cd-automerge

Este proyecto es una demo de una aplicación Node.js integrada con un pipeline de CI/CD usando **GitHub Actions**, que incluye:

- Validación automática de código.
- Auto-merge de Pull Requests.
- Despliegue en GitHub Pages.

---

## 🧱 Tecnologías utilizadas

- Node.js + Express
- GitHub Actions
- GitHub Pages
- YAML para configuración de workflows

---

## Preguntas finales

## 1. ¿Qué ventajas te ofrece la integración de un auto-merge en el pipeline de actions?

- Ahorro de tiempo: El `auto-merge` elimina la necesidad de intervención manual una vez que los cambios han sido validados, acelerando el flujo de trabajo.
- Mayor consistencia: Solo se fusionan `pull requests` que cumplen con los criterios definidos, lo que garantiza calidad en el código.
- Automatización completa: Permite cerrar el ciclo `CI/CD` sin pasos manuales, desde el push hasta el despliegue.
- Ideal para flujos ágiles: En proyectos con alta frecuencia de cambios, el `auto-merge` ayuda a mantener el ritmo sin comprometer la estabilidad.

## 2. ¿Qué desafíos encontraste al integrar la automatización?

- Configuración inicial de GitHub Pages: Si no se activa correctamente desde `Settings`, el paso de despliegue falla con errores 404.
- Protección de ramas: Los status checks no aparecen hasta que el workflow se ejecuta en `main`, lo que puede confundir al configurar reglas.
- Dependencias sin archivo de bloqueo: La ausencia de `package-lock.json` impide el uso de caché en `setup-node`, generando errores inesperados.
- Tokens y permisos: Requiere generar y guardar un token personal (`ACTIONS_PAT`) con permisos adecuados para que el auto-merge funcione.

## 3. ¿Cómo mejorarías esta arquitectura de pipeline para proyectos reales? ¿Tomarías como opción el auto-merge?

- Mejoras sugeridas:
    - Agregar validaciones más robustas: Integrar herramientas como `ESLint`, `SonarQube` o pruebas unitarias reales.
    - Separar entornos: Usar ramas `develop`, `staging` y `main` para controlar despliegues por ambiente.
    - Versionado automático: Incorporar tagging semántico (`v1.0.0`, `v1.1.0`) al hacer merge.
    - Notificaciones: Integrar `Slack` o correo para avisar cuando un PR se fusiona o se despliega.

- ¿Usaría auto-merge? Sí, pero con condiciones. En proyectos reales, el `auto-merge` es útil si:
    - Hay una política clara de revisiones previas.
    - Los tests cubren casos críticos.
    - Se limita a ciertos tipos de PRs (por ejemplo, cambios menores o automatizados).

----------------

## Resumen:
En este ejercicio se permitió entender cómo estructurar un workflow completo, proteger ramas, gestionar secretos y automatizar el ciclo de desarrollo desde el commit hasta el despliegue