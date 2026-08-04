# guidi-site

Sito personale statico (HTML/CSS puro) per Massimo Guidi. Nessuna build necessaria.

## Anteprima locale
Aprire `index.html` direttamente nel browser.

## Deploy (fase privata: online ma protetto da login)
1. `git init`, commit, push su un repo **privato** GitHub (es. `gh repo create guidi-site --private --source=. --push`)
2. Su [Cloudflare Pages](https://pages.cloudflare.com/): "Create a project" → "Connect to Git" → seleziona il repo GitHub → build command vuoto, output directory `/` (root)
3. Dopo il primo deploy, andare su **Cloudflare Zero Trust → Access → Applications** → "Add an application" → tipo "Self-hosted" → dominio: quello assegnato da Pages (`*.pages.dev`) → policy: "Allow" solo per le email autorizzate (es. la propria + eventuali revisori)
4. Il sito è ora raggiungibile online ma richiede login via codice OTP inviato all'email autorizzata

## Lancio pubblico
Rimuovere/disabilitare la Access Application creata al punto 3 (Cloudflare Zero Trust → Access → Applications → elimina policy). Nessun altro cambiamento necessario: stesso URL, stesso deploy.

## Contenuti da verificare prima del lancio
- Indirizzo email in `index.html` (sezione Contact) è un placeholder plausibile (`massimo.guidi@unibo.it`) — non confermato nei file sorgente, va verificato/corretto da Guidi
- Link ORCID e arXiv verificati contro `own-bib.bib`
