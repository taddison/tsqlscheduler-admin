# Summary

Manage local tasks with a UI.  Designed to be used locally (per-dev/DBA) and interact with a folder, optionally performing simple git operations to branch/commit/push batched changes.

# Dev

In development the `/api/sample-tasks` folder will be copied into the container, and mounted under `/tasks`.

```bash
docker-compose up --build --renew-anon-volumes
```

> `renew-anon-volumes` stops docker from reusing our old anonymous `node_modules` volume, which is important for picking up new dependencies.

# Prod

Build and run the production image (`Dockerfile.prod`) and mount the folder which contains tasks under `/tasks`.

# To Do

- [ ] Add express, expose port
- [ ] Wire web -> api
