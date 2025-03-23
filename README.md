# pgpql

![GitHub License](https://img.shields.io/github/license/SimonPrinz/pgpql?style=for-the-badge)
![GitHub Release](https://img.shields.io/github/v/release/SimonPrinz/pgpql?style=for-the-badge&include_prereleases&display_name=release)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/SimonPrinz/pgpql/actions.yaml?branch=main&style=for-the-badge)

> 💡 GraphQL API that provides OpenPGP functionality.

## Usage

Run via docker:
```bash
docker run --rm -p 8080:80 ghcr.io/simonprinz/pgpql
# access via http://127.0.0.1:8080/
```

or clone this repository and start it via npm:
```bash
git clone https://github.com/SimonPrinz/pgpql.git && cd pgpql && \
npm install && npm run build && npm run start
# access via http://127.0.0.1:3000/
```

## License

This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for details.
