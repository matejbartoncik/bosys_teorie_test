window.KARTICKY_DATA = {
  "deck": "BOSYS zkouška – kartičky",
  "language": "cs",
  "format_version": "1.0",
  "card_count": 151,
  "section_count": 31,
  "schema": {
    "id": "string, pořadové ID karty",
    "stable_id": "string, krátký hash otázky a sekce",
    "section_index": "number",
    "section": "string",
    "question_index": "number",
    "question": "string",
    "answer": "string, víceřádková odpověď",
    "points_hint": "string|null, číslo z osnovy pokud bylo uvedené",
    "tags": "array<string>",
    "source": "string"
  },
  "sections": [
    {
      "index": 1,
      "title": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "slug": "definice-os-typy-os-design-os-abstrakce-a",
      "card_count": 6
    },
    {
      "index": 2,
      "title": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "slug": "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace",
      "card_count": 6
    },
    {
      "index": 3,
      "title": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "slug": "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace",
      "card_count": 4
    },
    {
      "index": 4,
      "title": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "slug": "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu",
      "card_count": 4
    },
    {
      "index": 5,
      "title": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "slug": "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
      "card_count": 8
    },
    {
      "index": 6,
      "title": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "slug": "pozadavky-os-na-hw-nutny-pro-jeho-implementaci",
      "card_count": 4
    },
    {
      "index": 7,
      "title": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "slug": "implementace-procesu-v-os-proces-a-program-tabulka",
      "card_count": 5
    },
    {
      "index": 8,
      "title": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "slug": "procesy-v-os-unix-linux-vznik-a-zanik",
      "card_count": 4
    },
    {
      "index": 9,
      "title": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "slug": "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne",
      "card_count": 6
    },
    {
      "index": 10,
      "title": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "slug": "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile",
      "card_count": 4
    },
    {
      "index": 11,
      "title": "Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem – příkazy at a crontab.",
      "slug": "pozadavky-na-planovani-v-systemech-realneho-casu-moznosti",
      "card_count": 3
    },
    {
      "index": 12,
      "title": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "slug": "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a",
      "card_count": 4
    },
    {
      "index": 13,
      "title": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "slug": "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na",
      "card_count": 6
    },
    {
      "index": 14,
      "title": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "slug": "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek",
      "card_count": 4
    },
    {
      "index": 15,
      "title": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "slug": "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani",
      "card_count": 6
    },
    {
      "index": 16,
      "title": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "slug": "pozadavky-na-os-pro-praci-v-realnem-case",
      "card_count": 7
    },
    {
      "index": 17,
      "title": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "slug": "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie",
      "card_count": 5
    },
    {
      "index": 18,
      "title": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "slug": "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne",
      "card_count": 4
    },
    {
      "index": 19,
      "title": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "slug": "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod",
      "card_count": 5
    },
    {
      "index": 20,
      "title": "Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod.",
      "slug": "rizeni-pristupu-do-kriticke-sekce-pomoci-hw-metod",
      "card_count": 3
    },
    {
      "index": 21,
      "title": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "slug": "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani",
      "card_count": 5
    },
    {
      "index": 22,
      "title": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "slug": "nastroj-os-predavani-zprav-popis-systemovych-volani-a",
      "card_count": 5
    },
    {
      "index": 23,
      "title": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "slug": "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a",
      "card_count": 4
    },
    {
      "index": 24,
      "title": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "slug": "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna",
      "card_count": 4
    },
    {
      "index": 25,
      "title": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "slug": "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil",
      "card_count": 6
    },
    {
      "index": 26,
      "title": "IPC: komunikace procesů a vláken, možné prostředky komunikace.",
      "slug": "ipc-komunikace-procesu-a-vlaken-mozne-prostredky-komunikace",
      "card_count": 3
    },
    {
      "index": 27,
      "title": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "slug": "deleni-disku-na-oddily-zavadec-os-duvody-deleni",
      "card_count": 5
    },
    {
      "index": 28,
      "title": "Souborový systém, metadata, speciální soubory.",
      "slug": "souborovy-system-metadata-specialni-soubory",
      "card_count": 5
    },
    {
      "index": 29,
      "title": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "slug": "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody",
      "card_count": 4
    },
    {
      "index": 30,
      "title": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "slug": "typy-ulozist-raid-zpusob-alokace-dat-souboru",
      "card_count": 6
    },
    {
      "index": 31,
      "title": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "slug": "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace",
      "card_count": 6
    }
  ],
  "cards": [
    {
      "id": "bosys-01-01",
      "stable_id": "044c472e",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 1,
      "question": "Dvě základní funkce OS (s vysvětlením).",
      "answer": "• Správa prostředků = přidělování CPU (plánování), přidělování paměti (alokace,\nstránkování), přidělování zařízení I/O\n• Zjednodušující rozhraní (abstrakce a virtualizace HW) = umožňuje programům a\nuživatelům komunikovat s hardwarem",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-01-02",
      "stable_id": "860ee9a5",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 2,
      "question": "Vlastnosti moderního OS.",
      "answer": "• preemptivní plánování procesů\n• zajištění izolace procesů a uživatelů\n• správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy)\n• podpora IPC = komunikace a synchronizace procesů",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-01-03",
      "stable_id": "5a083849",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 3,
      "question": "Typy OS podle účelu (alespoň šest).",
      "answer": "• Mainframe\n• Serverové\n• víceprocesorové (clustery)\n• pro osobní PC\n• Real-Time\n• vestavěné",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-01-04",
      "stable_id": "3bcac294",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 4,
      "question": "Reprezentace abstrakcí (koncepcí) v OS a definice systémového volání.",
      "answer": "• Abstrakce = procesy, vlákna a jejich interakce\n  ◦ správa operační paměti, I/O, úložiště\n  ◦ souborový systém, paměť\n• Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-01-05",
      "stable_id": "bd812ecb",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 5,
      "question": "Průběh systémového volání.",
      "answer": "1. Uložení parametru na stack\n2. Volání funkce v knihovně\n3. Knihovna nastaví registr na typ volání\n4. Skok do jádra (instrukcí TRAP)\n5. Jádro provede vyhodnocení služby a volá příslušný ovladač nebo funkci\n6. Po dokončení může následovat návrat do knihovny a zpět do procesu\n• volání může být blokující, OS může mezi tím aktivovat jiný proces",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-01-06",
      "stable_id": "a45027c0",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 6,
      "question": "Příklady systémových volání a co obstarvají (alespoň tři).",
      "answer": "• read = čtení ze souboru\n• open = otevření souboru\n• exec = nahradí proces jiným programem\n• fork = vytvoří nový proces (duplikací)",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-02-01",
      "stable_id": "2eb291d4",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 1,
      "question": "Definice monolitického jádra OS.",
      "answer": "• každá funkce může být volána libovolnou jinou\n• z hlediska hierarchie volání procedur je jádro vnitřně nečleněné\n  ◦ > každá část muže přímo ovlivnit libovolnou jinou\n• všechny hlavní služby běží v jednom velkém adresním prostoru",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-02-02",
      "stable_id": "d87e9baf",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 2,
      "question": "Definice vrstveného jádra OS a čím se liší od monolitického s vnitřní strukturou vrstev.",
      "answer": "• Jádro je rozděleno do hierarchických vrstev\n• Každá vrstva smí volat pouze procedury své vlastní vrstvy nebo nejbližší nižší\n• Rozdíl od monolitického = strukturované rozčlenění a omezení vzájemného volání",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-02-03",
      "stable_id": "f2e6b83b",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 3,
      "question": "Definice mikrojádra OS a které funkce zajišťuje.",
      "answer": "• oddělená část se základními funkcemi, pracuje v Kernel-režimu\n• nejjednodušší jádro, přehledný kód, nižší chybnost a vyšší spolehlivost\n• poskytuje pouze základní funkce (správa paměti, komunikace mezi procesy, plánování)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-02-04",
      "stable_id": "99b7b345",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 4,
      "question": "Jak jsou v OS s mikrojádrem zajištěny ostatní funkcionality (které nejsou v mikrojádru).",
      "answer": "• ostatní služby jsou spouštěny v uživatelském prostoru jako samostatné démony\n• komunikují s mikrojádrem pomocí IPC kanálů",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-02-05",
      "stable_id": "7410d534",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 5,
      "question": "Definice virtualizace na úrovni jádra OS s příkladem.",
      "answer": "• Multiprograming pomocí Virtual Machine\n• Jádro emuluje celé virtuální stroje\n• Virtualizované jádro OS izoluje samostatné prostředí, přičemž jádro běží pouze jedenkrát\n• OS Solaris, Linux V-Server",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-02-06",
      "stable_id": "4840b3f4",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 6,
      "question": "Příklady OS různých architektur jádra (monolitické, vrstvené, mikrojádro).",
      "answer": "• Monolitické = Linux, Windows NT\n• Vrstvené = MULTICS, THE OS\n• Mikrojádro = Minix, QNX",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-03-01",
      "stable_id": "046c739c",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 1,
      "question": "Hlavní obecné cíle návrhu OS.",
      "answer": "• Efektivita\n• Spolehlivost a stabilita\n• Bezpečnost\n• Uživatelská přívětivost\n• Přenositelnost",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-03-02",
      "stable_id": "6d9de63f",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 2,
      "question": "Důvody náročnosti návrhu OS.",
      "answer": "• Současná práce více procesů\n• Nutnost vysoké spolehlivosti\n• Komplexita interakcí\n• Nutnost podpory různorodého HW\n• Zpětná kompatibilita\n• Přenositelnost\n• Konkurence\n• Životnost\n• Ochrana\n• Sdílení",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-03-03",
      "stable_id": "6bbbceeb",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 3,
      "question": "Principy vývoje OS.",
      "answer": "• Modularita a abstrakce\n• Jednoduchost (dělání jedno věci dobře) a úplnost\n• Kompozice\n• Textové, čitelné rozhraní\n• Efektivita implementace",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-03-04",
      "stable_id": "35c92f9d",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 4,
      "question": "Způsoby zabezpečení procesů, dat na médiu a přenášených dat.",
      "answer": "• Procesy = MMU a ochrana adresního prostoru, úrovně oprávnění\n• Data = přístupová práva, šifrování disku\n• Přenos dat = šifrované protokoly (TLS, SSH), VPN, digitální podpisy",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-04-01",
      "stable_id": "6141f365",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 1,
      "question": "Popis fází provádění instrukce.",
      "answer": "• 1. Fetch (načtení instrukce z paměti do instrukčního registru)\n• 2. Decode (dekódování, určení operace)\n• 3. Execute (vykonání instrukce)\n• 4. Memory Access (čtení z paměti)\n• 4. WriteBack (uložení výsledku operace do registru nebo paměti)",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-04-02",
      "stable_id": "50896a4e",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 2,
      "question": "Definice pipeline a další možnosti zvyšování výkonu CPU.",
      "answer": "• Pipeline = rozdělení zpracování instrukce na několik paralelních “stupňů”\n  ◦ ve stejnou chvíli může být v různých fázích více instrukcí\n• Další = Spekulativní provádění -> CPU předvídá větvení programu\n  ◦ Superskalární architektura -> CPU má vícenásobné aritmeticko-logické/floating-point jednotky -> může provádět více instrukcí současně\n  ◦ Vícejádrové procesory -> v jednom pouzdře jsou 2 či více jader, každé s vlastní pipeline",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-04-03",
      "stable_id": "4cea8f62",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 3,
      "question": "Přerušitelnost procesu, průběhu zpracování instrukce.",
      "answer": "• Přerušitelnost = schopnost CPU přerušit běh instrukčního proudu (preempce)\n• Průběh zpracování:\n1. Načtení instrukce\n2. Její dekódování\n3. Provedení aritmeticko-logické nebo logické instrukce (sčítání, násobení, bitové operace)\n4. Přístup do datové cache\n5. Zápis výsledku",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-04-04",
      "stable_id": "55f88093",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 4,
      "question": "Přerušovací systém: účel, průběh přerušení.",
      "answer": "• umožní efektivní využití CPU při asynchronní obsluze událostí\n• Průběh:\n1. HW vygeneruje Interrupt ReQuest (IRQ) na sběrnici\n2. CPU dokončí aktuální fázi instrukce a uloží stav na stack (zásobník)\n3. Provede skok na adresu obsluhy přerušení v jádře\n4. Jádro OS vyhodnotí typ přerušení a provede obslužnou rutinu\n5. Po obsluze návrat z přerušení, obnova stavu procesu a pokračuje tam, kde se skončilo",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-01",
      "stable_id": "5a12ce1b",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 1,
      "question": "Popis metod komunikace se vstupně‑výstupním zařízením:",
      "answer": "Metody komunikace s I/O zařízením:\n• Programovaný I/O s aktivním čekáním: CPU opakovaně kontroluje stav zařízení, proto je neefektivní.\n• I/O s přerušením: CPU zadá operaci a může dělat jinou práci; zařízení po dokončení vyvolá přerušení.\n• DMA: CPU nastaví adresu, velikost a příkaz, přenos bloku mezi zařízením a pamětí provede DMA řadič a CPU je informováno přerušením.",
      "points_hint": null,
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-02",
      "stable_id": "4725943b",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 2,
      "question": "Metoda 1 (neefektivní).",
      "answer": "• Přístup pouze pomocí instrukcí CPU:\n1. Zápis/čtení z registru V-V zařízení\n2. Kontrola stavu zápisu/čtení (neproduktivní čekání)\n3. Pokračujeme krokem 1",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-03",
      "stable_id": "9ba6e71e",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 3,
      "question": "Metoda 2 (efektivnější).",
      "answer": "• Přístup pomocí instrukcí CPU s přerušovacím signálem\n1. Zápis/čtení z registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-04",
      "stable_id": "e25597fd",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 4,
      "question": "Metoda 3 (nejefektivnější).",
      "answer": "• Přímý přístup do paměti -> DMA (Direct Memory Access)\n1. Zápis adresy dat, množství dat a příkazů do registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu daného množství dat vyvolán přerušovací signál, přeruší operace\nkroku 2, dokončí se přenos -> přenáší se celý blok dat bez účasti CPU",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-05",
      "stable_id": "c3670859",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 5,
      "question": "Definice paměti cache.",
      "answer": "• malá, rychlá mezipaměť mezi CPU a hlavní pamětí\n• uchovává často používaná data či instrukce",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-06",
      "stable_id": "9962c024",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 6,
      "question": "Důvod existence konceptu paměti cache.",
      "answer": "• procesor je mnohonásobě rychlejší než RAM, cache zmírňuje toto “úzké hrdlo” tím, že\nsnižuje latenci přístupů",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-07",
      "stable_id": "aaff0e56",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 7,
      "question": "Důvod efektivity cache i při její relativně malé velikosti.",
      "answer": "• díky lokalitě odkazů (prostorové i časové) má cache vysoký hit ratio -> proces často\npřistupuje ke stejným adresám čí sousedním oblastem",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-05-08",
      "stable_id": "e0f9c573",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 8,
      "question": "Výpočet střední přístupové doby do paměti.",
      "answer": "◦ Taverage = Tcache + (1-H) * Tmemory\n• H = hit ratio (pravděpodobnost zásahu v cache)\n• Tcache = čas přístupu do cache\n• Tmemory = čas přístupu do hlavní paměti",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-06-01",
      "stable_id": "403d6570",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 1,
      "question": "Nutné vlastnosti CPU a paměti pro implementaci OS a jejich účel.",
      "answer": "• Přerušovací systém = umožní efektivní využití CPU při asynchronních přenosech dat\n(např. DMA)\n• Programovatelný časovač = pravidelně generuje přerušení, které umožňuje preempci\n• CPU s úrovněmi oprávnění= alespoň 2 režimy (kernel/user) -> umožní ošetřit neoprávněné\npřístupy a operace\n• CPU s podporou ochrany a virtualizace paměti = umožní využít sekundární paměť pro\nodložení nepotřebných procesů",
      "points_hint": "2 + 3",
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-06-02",
      "stable_id": "e3a057e6",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 2,
      "question": "Nutné subsystémy HW pro implementaci OS (kromě CPU a paměti) a jejich účel.",
      "answer": "• Programovatelný časovač = generuje periodická přerušení pro plánovač\n• Řadič přerušení (PIC/APIC) = zpracovává požadavky na přerušení z více různých zdrojů a\nprioritizuje IRQ linky\n• Řadič I/O zařízení = komunikace mezi operační pamětí, CPU a konkrétním zařízením\n• DMA řadič = přímý přístup zařízení do paměti bez CPU\n• Sběrnice (Bus) = propojení různých částí PC mezi sebou, které umožňuje komunikaci a\npřesun dat",
      "points_hint": "2 + 2",
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-06-03",
      "stable_id": "05e853c8",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 3,
      "question": "Definice registrů CPU, jejich druhy.",
      "answer": "• Registry:\n  ◦ malé (jednoslovné), velmi rychlé paměti uvnitř CPU\n  ◦ dočasně drží data a řídící informace\n• Druhy:\n  ◦ Program counter = obsahuje adresu následující instrukce\n  ◦ Instruction register = interní registr obsahující právě prováděnou instrukci\n  ◦ Stack pointer = obsahuje adresu vrcholu zásobníku\n  ◦ Stavový registr = obsahuje příznaky, které informují o výsledku předchozí instrukce\n  ◦ Další: obecné (libovolné použití), bázové (obsahuji počáteční adresy), ofsetové (obsahují\nRelativní adresy), privátní (používá je interně CPU)",
      "points_hint": "1 + 2",
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-06-04",
      "stable_id": "88bae3cc",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 4,
      "question": "Stavový registr CPU a zahrnuté příznaky (alespoň tři).",
      "answer": "• Program Status Word, případně flags\n• obsahuje příznaky, které informují o výsledku předchozí instrukce\n• Z-Zero Flag = výsledek operace byla nula\n• C-Carry Flag = přenos bitů při sčítání\n• N-Negativ Flag = výsledek byl záporný\n• V-Overflow Flag = přetečení (výsledek se nevejde do registru)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-07-01",
      "stable_id": "df01abe3",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 1,
      "question": "Proces a program: definice.",
      "answer": "• Proces = aktivní/dynamická instance programu vložená do operační paměti s vlastním\nkontextem běhu (příprava pokrmu dle receptu)\n• Program = pasivní/statický soubor instrukcí, dat a kódu (recept)",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-07-02",
      "stable_id": "011799af",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 2,
      "question": "Metadata procesu (alespoň šest).",
      "answer": "• Identifikátor procesu (PID)\n• Stav procesu (ready, running, blocked...)\n• Kontext CPU (registry, PC, PSW)\n• Údaje plánovače\n• Informace o otevřených souborech\n• Časové razítko\n• Vlastník a práva\n• Adresový prostor (text, data, heap, stack, mapování paměti)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-07-03",
      "stable_id": "b9b77ead",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 3,
      "question": "Průběh přepnutí kontextu.",
      "answer": "• 1. Uložení kontextu běžícího procesu do PCB (Process Control Block)\n• 2. Výběr nového procesu plánovačem ke spuštění z fronty “ready”\n• 3. Načtení kontextu nového procesu do registru CPU\n• 4. Přepnutí do uživatelského režimu a pokračování ve vykonávání",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-07-04",
      "stable_id": "41ecfc18",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 4,
      "question": "Třístavový model: popis stavů.",
      "answer": "• Ready = proces je připraven k běhu, čeká na přidělení CPU\n• Running = proces právě využívá CPU (běží)\n• Waiting (Blocked) = proces čeká na vnější událost (I/O)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-07-05",
      "stable_id": "3b7fa11a",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 5,
      "question": "Třístavový model: příčiny přechodů mezi stavy.",
      "answer": "• Ready -> Running = plánovač přiřadí CPU novému procesu\n• Running -> Waiting = volání I/O, čekání na událost\n• Running -> Ready = vypršel časový kvantum\n• Waiting -> Ready = událost nastala -> Dokončení I/O",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-08-01",
      "stable_id": "caa87260",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 1,
      "question": "Příčiny vzniku procesu a spuštění nového programu v posixových systémech, související systémová volání, hierarchie procesů.",
      "answer": "• Vznik = vytvoření jádrem, pomocí systémového volání nebo požadavkem uživatele\n• fork(2) = vytvoří nový proces (duplikuje ten rodičovský)\n• execve(2), system(3), exec(3)= nahradí aktuální program procesu novým programem\n• Hierarchie = procesy tvoří strom, je jeden kořenový proces (init), ostatní procesy\nvznikají jako potomci",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-08-02",
      "stable_id": "79a0f6e5",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 2,
      "question": "Příčiny zániku procesu a čekání na potomka v posixových systémech, související systémová volání.",
      "answer": "• Důvody zániku = systémovým voláním, detekcí chyby a ukončení, nedobrovolná chyba a\nzabití jiným procesem nebo jádrem\n• exit () = okamžitě ukončí proces\n• wait() = čekání na změnu stavu, například ukončení",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-08-03",
      "stable_id": "8a762053",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 3,
      "question": "Stavy procesů v Linuxu.",
      "answer": "• R = running/runnable = běžící nebo připravený\n• S = sleep = blokovaný\n• D = uninterruptible sleep = nepřerušitelný spánek\n• T = stopped/traced = pozastavený nebo krokovaný\n• Z = zombie = ukončený, ale rodič nečekal",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-08-04",
      "stable_id": "e3a58b9c",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 4,
      "question": "Posixové signály, možnosti jejich zpracování a příklady.",
      "answer": "• Signál = jednoduchá zpráva procesům, zpracována buď jádrem nebo navázanou funkcí\n  → jsou zpracovávány typicky jako ukončení procesu\n  → pozastavení a pokračování pozastaveného procesu\n  → lze také ignorovat nebo obsloužit vlastní funkcí\n• Příklady signálů:\n  ◦ SIGINT (přerušení)\n  ◦ SIGTERM (žádost o ukončení)\n  ◦ SIGSTP (pozastavení procesu)\n  ◦ SIGCHLD (signalizace ukončení potomka)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-09-01",
      "stable_id": "f4412dfb",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 1,
      "question": "Motivace zavedení vláken.",
      "answer": "Motivace zavedení vláken.\n• Multithreading\n• Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP)\n• Zjednodušení programování\n• Nižší režie = vlákna vznikají rychleji než procesy\n• Paralelní zpracování",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-09-02",
      "stable_id": "43776192",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 2,
      "question": "Společné a samostatné položky metadat procesů/vláken.",
      "answer": "• Společné = adresní prostor a prostředky (otevřené soubory)\n• Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-09-03",
      "stable_id": "f28b2d7b",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 3,
      "question": "Důvody vyhrazené části paměti pro každé vlákno.",
      "answer": "• Každé vlákno potřebuje vlastní zásobník pro nezávislou správu volání funkcí, návratových\nadres, lokálních proměnných, stabilitu a bezpečnost",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-09-04",
      "stable_id": "eda53023",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 4,
      "question": "Implementace vláken s podporou OS a bez ní, výhody a nevýhody.",
      "answer": "• Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven\n• Výhody:\n  ◦ lepší režie, nevyžaduje přechod do režimu jádra\n  ◦ strategie plánovače lze přizpůsobit aplikaci\n• Nevýhody:\n  ◦ blokace jednoho vlákna blokuje celý proces\n  ◦ složitá implementace knihoven\n• S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault)\n• Výhody:\n  ◦ lze provádět i vlákna, jejichž vlákno způsobilo page-fault\n  ◦ není třeba neblokujícího volání\n• Nevýhody:\n  ◦ horší režie (kvůli režimu Kernel)\n  ◦ pevná strategie plánovače vláken",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-09-05",
      "stable_id": "003b1afa",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 5,
      "question": "Komplikace při zavádění vláken.",
      "answer": "• Nutno alokovat některé globální proměnné přímo pro samostatné vlákno\n  → Riziko souběhu a závodních podmínek\n• Nereentrálnost funkcí = vstoupí-li vlákno, některé struktury jsou dočasně v\nnekonzistentním stavu a vstoupí-li jiné, dojde k narušení konzistence dat",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-09-06",
      "stable_id": "eb3a3c01",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 6,
      "question": "Posixová knihovna vláken: nástroje pro řešení problémů souběhu a jejich účel.",
      "answer": "• Mutex = vzájemné vyloučení, zamkne KS -> pouze jedno vlákno má přístup\n• Semafor = řízení přístupu k omezenému počtu prostředků\n• Bariéra = čekání více vláken na dosažení určitého bodu\n• Podmínková proměnná = vlákna čekají na splnění nějaké podmínky",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-10-01",
      "stable_id": "6d4dd7c1",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 1,
      "question": "Úloha plánovače, režimy plánování procesů.",
      "answer": "• Spravuje přidělování CPU procesům\n• Typy plánování:\n  ◦ Long-term = rozhoduje, které procesy se mají zpracovat a které ukončit\n  ◦ Medium-term = určuje, které procesy se mají odložit či vrátit do paměti\n  ◦ Short-term = rozhoduje, který z připravených procesů dostane CPU a na jak dlouho\n• Režimy:\n• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-10-02",
      "stable_id": "bd8d26df",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 2,
      "question": "Cíle plánování (obecně a dle určení OS).",
      "answer": "• Rovnováha zatížení systému\n• Spravedlnost = každý proces by měl stejně času\n• Dodržování strategií:\n  ◦ Interaktivní systémy = minimalizace odezvy, proporcionalita\n  ◦ Dávkové systémy = maximalizovat propustnost, minim. obrat, vysoké využití CPU\n  ◦ Real Time systémy = respektovat lhůty, předvídatelnost",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-10-03",
      "stable_id": "f226fc95",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 3,
      "question": "Popis plánovacích algoritmů: historické.",
      "answer": "• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)\n• FCFS (First Come First Serve) = také znám jako FIFO\n  ◦ nepreemptivní, procesy jsou zpracovány v pořadí, v jakém přišly\n  ◦ jednoduchá implementace, ale dlouhé procesy blokují krátké\n• SJF (Shortest Job First)\n  ◦ nepreemptivní, vybírá se proces s nejkratší předpokládanou dobou běhu\n  ◦ optimální doba čekání, ale dlouhé procesy mohou hladovět\n• Shortest Remaining Time Next\n  ◦ preemptivní varianta SJF, vybírá se proces s nejkratší dobou do dokončení\n  ◦ lze přerušit proces, pokud přijde kratší úloha\n  ◦ dále minimalizuje obrat, také hrozí vyhladovění",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-10-04",
      "stable_id": "4fb0ab99",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 4,
      "question": "Popis plánovacích algoritmů: moderní a specifické.",
      "answer": "• Round-Robin (cyklická obsluha)\n  ◦ preemptivní, každý proces má časové kvantum k využití CPU\n  ◦ přepnutí na další proces je po vypršení kvanta, nebo blokujícím systémovým voláním\n  ◦ nutno volit optimální čas (např. 10 ms)\n• Priority Scheduling\n  ◦ každý proces má přidělenou prioritu, vybírá se nejvyšší priorita\n  ◦ obvykle pracuje s více frontami pro připravené procesy\n  ◦ může nastat vyhladovění menších priorit -> lze řešit dynamickou složkou priorit\n• Fair Share (FSS) a Completely Fair Share (CFS)\n  ◦ zaručuje každému uživateli stejné podmínky pro využívání CPU\n  ◦ Příklad: uživatel A má 9 procesů, uživatel B má 1 proces -> oba mají na vykonání\n50% času (1/počet uživatelů)\n• Lottery Scheduling\n  ◦ procesy dostávají “lístky” a periodicky se náhodně losuje\n  ◦ výherní lístek dostane časové kvantum\n  ◦ důležité procesy mohou mít více lístků (priorita)\n  ◦ snadná implementace, lze použít jako aproximaci jiných alg.",
      "points_hint": "6",
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-11-01",
      "stable_id": "4c982f3a",
      "section_index": 11,
      "section": "Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem – příkazy at a crontab.",
      "question_index": 1,
      "question": "Specifické požadavky na plánování procesů v systémech reálného času, plánovatelnost.",
      "answer": "• V těchto systémech je nutná nízká odezva a dodržení časových limitů\n• Používají speciální algoritmy založené obvykle na prioritách (např. Earliest Deadline First)\n• Plánovatelnost:\n  ◦ statické plánování procesů -> tabulkami je přesně stanoveno, kdy a která úloha má být\nspuštěna\n  ◦ dynamické plánování procesů -> pokud nevíme, které procesy budou spuštěny",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-11",
        "pozadavky-na-planovani-v-systemech-realneho-casu-moznosti"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-11-02",
      "stable_id": "6af5afde",
      "section_index": 11,
      "section": "Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem – příkazy at a crontab.",
      "question_index": 2,
      "question": "Plánování vláken na systémech SMP a možné optimalizace.",
      "answer": "• Procesy obvykle tvoří jednu frontu, ze které se proces vybere, pokud je volný procesor\n• Složitější plánování se na SMP příliš nepoužívá\n• Optimalizace:\n  → Sdílení zátěže = náhodné rozdělení zátěže mezi procesory\n  ◦ globální fronta vyžadující výlučný přístup\n  ◦ neefektivní metoda\n  → Skupinové plánování = související vlákna tvoří jeden proces\n  ◦ jsou plánována tak, aby běžela na různých procesorech současně\n  ◦ vlákna vyžadují častou interakci a synchronizaci\n  ◦ některé procesory mohou zůstat nevyužity, neboť vlákna čekají na uvolnění skupiny\nprocesorů\n  → Pevné přiřazení procesoru = vlákna jsou přiřazena specifickému procesoru\n  ◦ zvýší se tím efektivita využití cache na jednotlivých procesorech\n  ◦ některé procesory mohou zůstat nevyužity, neboť vlákno čeká na uvolnění konkrétního\nprocesoru\n  → Dynamické plánování = pokud se počet vláken průběžně mění\n  ◦ OS upravuje zátěž s cílem zlepšit využití procesorů -> obsazuje volné procesory\n  ◦ typicky se dává přednost novým vláknům -> porušení výhod skupinového plánování",
      "points_hint": "4× 2",
      "tags": [
        "BOSYS",
        "sekce-11",
        "pozadavky-na-planovani-v-systemech-realneho-casu-moznosti"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-11-03",
      "stable_id": "2cec49c1",
      "section_index": 11,
      "section": "Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem – příkazy at a crontab.",
      "question_index": 3,
      "question": "Příkazy pro nastavení spouštění úloh v daném čase a démony, které to obstarávají. Orientačně možnosti konfigurace.",
      "answer": "• at = jednorázové spuštění v určitém čase\t\t\tDémon = atd\n• crontab = plánování periodických úloh\t\t\t\tDémon = crond\nOrientačně možnosti konfigurace.\n• Konf. at:\t\t\tKonf. cron\n• at now +1 hour\t\t-crontab –e -> vypíše uživatelův crontab\n• at 20:00\t\t\t-crontab –l -> vypíše jeho obsah",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-11",
        "pozadavky-na-planovani-v-systemech-realneho-casu-moznosti"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-12-01",
      "stable_id": "69f1b971",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 1,
      "question": "Důležité požadavky na operační paměť (na její vlastnosti, kritické pro běh OS).",
      "answer": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-12-02",
      "stable_id": "507bfea1",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 2,
      "question": "Pevné dělení paměti, nevýhody, umisťování procesů.",
      "answer": "• Paměť je rozdělena do pevně velkých oddílů (stejné/různé velikosti)\n• Stejně velké oblasti:\n  ◦ Proces je zaveden do libovolného volného oddílu\n  ◦ Vnitřní fragmentace, neefektivní využití přidělené paměti\n• Různě velké oblasti:\n  ◦ Více samostatných front podle velikosti oddílu (menší vnitřní fragmentace,\nale možná blokace procesů, které mohl běžet ve větší volné oblasti)\n  ◦ Jedna společné fronta s best-fit alg. (rychlejší, ale větší vnitřní fragmentace)",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-12-03",
      "stable_id": "e24cc7d9",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 3,
      "question": "Dynamické dělení paměti, nevýhody.",
      "answer": "• Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace)\n• Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá\nspráva paměti -> nutná defragmentace",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-12-04",
      "stable_id": "f31f16cb",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 4,
      "question": "Umisťovací algoritmy pro dynamické dělení paměti (s popisem).",
      "answer": "• First Fit = první dostatečně velké bloky\n• Best Fit = nejmenší vhodný blok\n• Worst Fit = největší volný blok\n• Next Fit = prohledává paměť od oblasti, kam se naposledy umisťovalo (nejrychlejší)",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-13-01",
      "stable_id": "853be212",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 1,
      "question": "Možná řešení nedostatku RAM (s vysvětlením principu).",
      "answer": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap",
      "points_hint": "2 + 2",
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-13-02",
      "stable_id": "91a28f73",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 2,
      "question": "Virtualizace paměti: definice a HW podpora.",
      "answer": "• Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno\n• Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-13-03",
      "stable_id": "e39724a6",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 3,
      "question": "Virtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).",
      "answer": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat \tefektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n  ◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n  ◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n  ◦ Možnost využít sekundární paměť jako rozšíření RAM\n  ◦ Nutnost řešit page-fault a výběry stránek\n  ◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n  ◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n  ◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-13-04",
      "stable_id": "cce6100a",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 4,
      "question": "Virtualizace paměti: pojmy (RS, S).",
      "answer": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat \tefektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n  ◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n  ◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n  ◦ Možnost využít sekundární paměť jako rozšíření RAM\n  ◦ Nutnost řešit page-fault a výběry stránek\n  ◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n  ◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n  ◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-13-05",
      "stable_id": "bc4599c6",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 5,
      "question": "Princip lokality odkazů.",
      "answer": "• Proces má tendenci přistupovat do stejné paměťové oblasti\n• Časová lokalita = proces často přistupuje ke stejné adrese\n• Prostorová lokalita = proces přistupuje k adresám blízko nedávno použitým",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-13-06",
      "stable_id": "33b33e46",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 6,
      "question": "Thrashing – definice a příčiny.",
      "answer": "• Příliš časté page-faulty a swap-in/swap-out operace místo výpočtů\n• Příčiny = Nedostatek RAM, špatná organizace RAM, neoptimalizovaný kód",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-14-01",
      "stable_id": "b6839ea6",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 1,
      "question": "Princip, vlastnosti (spojitost, fragmentace, sdílení).",
      "answer": "Princip stránkování = rozdělení fyzické RAM na stejné bloky – rámce (frames)\n• Spojitost:\n  ◦ Proces vnímá souvislý lineární prostor\n  ◦ Stránky jsou však rozmístěny nesouvisle po rámcích (žádná vnější fragmentace)\n• Fragmentace:\n  ◦ Vnitřní -> nevyužití části přidělené paměti\n  ◦ Vnější -> díry v paměti po uvolnění procesu (odstraněná)\n• Sdílení:\n  ◦ Procesy mohou mít ve svých tabulkách stejné číslo rámce pro stránky\nspolečných kódu či dat -> šetření RAM",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-14-02",
      "stable_id": "46673c21",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 2,
      "question": "Stránkové tabulky, převod adresy.",
      "answer": "• Každá adresa v lineárním adresovém prostoru je složena z čísla stránky a offsetu\n• Číslo stránky je indexem do stránkové tabulky\n• Fyzickou adresu lze získat z čísla rámce v tabulce a offsetu ve stránce\n• Rámce jsou stejně velké jako stránky = offset zůstává nezměněný\n  → ve výsledné adrese tedy dojde k nahrazení čísla stránky číslem rámce\n• Převod:\n  ◦ Dolních 12 bitů = offset\n  ◦ Horních 20 bitů = číslo stránky\n  ◦ Virt. Adresa => číslo stránky + offset\n  ◦ Fyz. Adresa => číslo rámce + offset",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-14-03",
      "stable_id": "e12261c4",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 3,
      "question": "Volba velikosti stránky a důsledky.",
      "answer": "• Malé stránky =více položek ve stránkové tabulce (menší vnitřní fragmentace, větší režie)\n• Velké stránky =méně položek ve stránkové tabulce (větší vnitřní fragmentace, menší režie)\n• Volíme co nejmenší stránku",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-14-04",
      "stable_id": "9bf42f35",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 4,
      "question": "Řešení rozsáhlosti stránkových tabulek, TLB.",
      "answer": "• Víceúrovňové tabulky = stránkové tabulky alokují pouze potřebné části\n• Invertované tabulky = indexuje místo stránek rámce, velikost závisí na fyzické paměti\n• TLB (Translation Lookaside Buffer) = speciální rychlá cache v CPU\n  → ukládá nejčastěji používané překlady VA na FA",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-15-01",
      "stable_id": "0acaa30c",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 1,
      "question": "Důležité řídicí bity ve stránkové tabulce (z hlediska využívání algoritmy nahrazování) a jejich význam.",
      "answer": "• Přístupový (Accessed) = indikuje, zda byla stránka během určité doby použita\n• Změněný (Dirty) = indikuje, zda byla stránka změněna od zapsání do fyzické paměti\n• Přítomnost (Present) = indikuje, zda je stránka právě načtena do fyzické paměti\n• Oprávnění (Read/Write) = indikuje, zda je stránka určena pouze pro čtení, nebo i pro zápis",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-15-02",
      "stable_id": "114bff61",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 2,
      "question": "Strategie zavádění stránek: účel, algoritmy.",
      "answer": "• Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu\n• Na vyžádání (demand paging) = načítání stránek až při potřebě\n• Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-15-03",
      "stable_id": "e6aef817",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 3,
      "question": "Strategie umisťování stránek: účel, algoritmy.",
      "answer": "• Určuje, kam se nově načtená stránka uloží\n• První volný rámec (First fit) = do první volné fyzické stránky\n• Nejlepší vhodný rámec (Best fit) = stránka nejlépe odpovídající požadavku\n• Náhodné umístění (Random placement) = náhodně vybere fyzickou stránku",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-15-04",
      "stable_id": "cca32257",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 4,
      "question": "Strategie nahrazování stránek: účel, algoritmy.",
      "answer": "• Odložení stránky na disk, je-li třeba načíst do RAM jiné stránky, pro které by nebylo místo\n• FIFO = nahrazuje stránku, které je v paměti nejdéle\n• LRU (Least Recently Used) = nahrazuje stránku, která nebyla nejdéle použita\n• NRU (Not Recently Used) = nahrazuje stránku podle příznaků použití a změny\n• Second Chance = modifikace FIFO s využitím příznaku použití, kdy použitá stránka\nje s nulovým příznakem použití zařazena na konec fronty\n• Clock = kruhová varianta Second Chance, pointer skenuje stránky, až najde nulový\npříznak použití",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-15-05",
      "stable_id": "f958276f",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 5,
      "question": "Strategie uklízení (čištění) stránek: účel, algoritmy.",
      "answer": "• Určuje, které upravené stránky se uloží na disk\n• Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba\n  ◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení)\n• Precleaning = periodické ukládání stránek v dávce\n  ◦ procesy čekají pouze na čtení\n  ◦ Používá např. alg. Page-buffering",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-15-06",
      "stable_id": "cf5690ad",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 6,
      "question": "Volba velikosti resident‑set.",
      "answer": "//PŘEZKOUMAT\n• Ovlivňuje počet page faultů a výkon procesu\n• Příliš malý RS -> thrashing\n• Příliš velký RS -> neefektivní využití paměti",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-16-01",
      "stable_id": "6d7b15e4",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 1,
      "question": "Definice systémů RT (pracujících v reálném čase) a jejich správná funkce.",
      "answer": "• Systémy, u kterých kromě správnosti výpočtu záleží i na dodržení časových lhůt\n• Jejich správnost výpočtu je dána správným výsledkem a včasným dodáním",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-16-02",
      "stable_id": "e9c0084e",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 2,
      "question": "Rozdělení systémů RT dle dodržování termínů (s popisem).",
      "answer": "• Hard RT = zameškání termínu = chyba\n• Soft RT = zameškání termínu není fatální, ale snižuje kvalitu\n• Firm RT = lze tolerovat jednorázové zameškání, ale po limitu je výsledek bezcenný",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-16-03",
      "stable_id": "8b1e5808",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 3,
      "question": "Charakteristické vlastnosti RTOS.",
      "answer": "• rychlé přepínání kontextu\n• preemptivní plánování založené na prioritách\n• multitasking s komunikací procesů\n• rychlý souborový systém a rychlá komunikace procesů\n• speciální systémové služby (alarm, timeout…)\n• malé rozměry",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-16-04",
      "stable_id": "13c69e39",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 4,
      "question": "Příklady RTOS (alespoň dva).",
      "answer": "• RTLinux\n• QNX",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-16-05",
      "stable_id": "fa064501",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 5,
      "question": "Definice pojmů latence a odezva (na úrovni přerušovacího systému).",
      "answer": "• Latence = doba od příchodu požadavku do začátku provádění obsluhy\n• Odezva = doba, za kterou OS zareaguje na požadavek",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-16-06",
      "stable_id": "849d17b0",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 6,
      "question": "Definice vestavěných systémů.",
      "answer": "• Subsystémy integrované do větších zařízení\n• Určeny k plnění jedné specifické funkce\n• Mikrovlnky, pračky, routery",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-16-07",
      "stable_id": "b29b179f",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 7,
      "question": "Typické vlastnosti vestavěných systémů (alespoň šest).",
      "answer": "• Malé rozměry a váha\n• Nízká spotřeba\n• Odolnost\n• Real-time funkce\n• Reaktivita\n• Spolehlivost a bezpečnost\n• Cenová citlivost",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-17-01",
      "stable_id": "d738cd4d",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 1,
      "question": "Kategorie počítačových systémů z hlediska paralelizace zpracování dat.",
      "answer": "• SISD = jeden instrukční proud, jeden proud dat\n• SIMD = jeden instrukční proud, vícero datových proudů\n• MISD = více instrukčních proudů nad jedním datovým proudem\n• MIMD = vícero instrukčních i datových proudů",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-17-02",
      "stable_id": "f2aa5757",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 2,
      "question": "Rozdělení víceprocesorových systémů dle vazby.",
      "answer": "• S těsnou vazbou (Tightly coupled) = procesory mají sdílenou operační paměť a jeden OS\n• S volnou vazbou (Loosely coupled) = každý procesor má vlastní operační paměť a V-V subsystémy",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-17-03",
      "stable_id": "ed44857b",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 3,
      "question": "Rozdělení víceprocesorových systémů dle symetrie.",
      "answer": "• Symetrické (SMP) = mají shodné procesory\n  ◦ jádro OS, procesy i vlákna mohou být prováděny libovolným procesorem\n• Asymetrické (AMP) = specializované procesory pro specializované úlohy\n  ◦ jádro a většina úloh běží na hlavním CPU",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-17-04",
      "stable_id": "72e6d882",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 4,
      "question": "Granularita úlohy: účel, jak se pozná, že úloha je/není granulovatelná.",
      "answer": "• Granulatrita = popisuje, jak jemně lze úlohu rozdělit na menší části, které lze paralelně\nzpracovat\n• Hrubě granulovatelná úloha = není nutné či nelze příliš rozdělit\n  ◦ mezi jednotlivými úseky není třeba příliš komunikace a synchronizace\n  ◦ vhodné dělit na kooperující procesy\n• Jemně granulovatelná úloha = lze rozdělit na kratší úseky\n  ◦ častější komunikace nebo synchronizace\n  ◦ vhodné zpracovávat paralelně",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-17-05",
      "stable_id": "c4b33c23",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 5,
      "question": "Vhodné stupně vazby pro různou granularitu.",
      "answer": "• Hrubá = Loosely-coupled\n• Jemná = Tightly-coupled",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-18-01",
      "stable_id": "94f20403",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 1,
      "question": "Definice kritické sekce v programu.",
      "answer": "• Část kódu, ve kterém se manipuluje se sdíleným prostředkem\n• V každém okamžiku smí být tento kód vykonáván nanejvýš jedním procesem",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-18-02",
      "stable_id": "e1e7cb60",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 2,
      "question": "Předpoklady pro řešení přístupu do kritické sekce. (Co se předpokládá, že platí, a co se nesmí předpokládat.)",
      "answer": "• Proces se provádí nenulovou rychlostí\n• Nelze předpokládat relativní rychlost procesů ani jejich plánování\n  ◦ např. Nelze spoléhat na střídání procesů na CPU\n• U víceprocesorových systémů se předpokládá, že zápis na jedno sdílené paměťové místo\nje atomický (pouze pro jediný procesor)",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-18-03",
      "stable_id": "49933601",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 3,
      "question": "Požadované vlastnosti řešení přístupu do kritické sekce (s vysvětlením).",
      "answer": "• Vzájemné vylučování (mutual exclusion) = vždy jen jeden proces v kritické sekci\n• Pokrok v přidělování (progress) = pokud je volná KS, měl by do ní vstoupit zájemce v konečném čase\n• Omezené čekání (bounded wait) = každý proces bude vpuštěn do KS po omezeném počtu\nvstupů jiných procesů\n  ◦ žádný proces nesmí čekat nekonečně dlouho",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-18-04",
      "stable_id": "0e43ec31",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 4,
      "question": "Typy řešení přístupu do kritické sekce (s příklady).",
      "answer": "• SW řešení = čistě algoritmické postupy\n  ◦ “Bakery” a Petersonův algoritmus\n• HW řešení = využití atomických instrukcí procesoru\n  ◦ Zákaz přerušení, speciální instrukce (test-and-set, xchg)",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-19-01",
      "stable_id": "2f08a16b",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 1,
      "question": "SW algoritmus pro KS s proměnnou locked, důvod nefunkčnosti.",
      "answer": "• Zavedení proměnné, která eviduje obsazenost KS\n• Zjišťujeme, zda je bool locked = false, pokud ano, tak locked = true -> KS -> locked = false\n• Problém = 2 procesy mohou vidět locked = false, oba vstoupí do KS",
      "points_hint": "1 + 1",
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-19-02",
      "stable_id": "ca184a3e",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 2,
      "question": "SW algoritmus pro KS s proměnnou turn, důvod nefunkčnosti.",
      "answer": "• Zavedení proměnné určující, který proces smí vstoupit do KS -> střídání\n• Problém = pokud jeden proces nechce vstoupit do KS, druhý může být zablokován",
      "points_hint": "1 + 1",
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-19-03",
      "stable_id": "a42da5d7",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 3,
      "question": "SW algoritmus pro KS s proměnnými flag[i], důvod nefunkčnosti.",
      "answer": "• Zavedení sdílené proměnné flags pro každý proces\n• Signalizuje, zda proces požaduje vstup do KS\n• Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag)\n  ◦ deadlock",
      "points_hint": "1 + 1",
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-19-04",
      "stable_id": "bca0c42b",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 4,
      "question": "Funkční SW algoritmy pro řízení přístupu do KS, krátká charakteristika.",
      "answer": "• Petersonův alg. = používá flag + turn, zajišťuje všechny 3 podmínky (pro 2 procesy)\n• Bakery alg. = proces dostane před vstupem do KS lístek s časem, potom čeká, až všechny\nmenší lístky vstoupí do KS (pro libovolný počet procesů)",
      "points_hint": "2 + 2",
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-19-05",
      "stable_id": "826c2e5b",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 5,
      "question": "Specifické nevýhody SW algoritmů pro řízení přístupu do KS (včetně vysvětlení, bez všeobecných nevýhod všech typů algoritmů).",
      "answer": "• Havárie v KS = pro ostatní procesy se KS jeví jako obsazená\n• Busy wait (aktivní čekání) = procesy čekající na vstup do obsazené KS spotřebovávají neproduktivně čas procesoru\n  → SW řešení je vhodné pouze pokud je KS velmi krátká\n• Deadlocky = při striktně prioritním plánování\n  ◦ přeruší-li proces s vyšší prio. proces v KS, proces s nižší prio. nikdy KS neopustí\n  ◦ vyšší prio. proces se nedostane do KS (deadlock)",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-20-01",
      "stable_id": "c89b5083",
      "section_index": 20,
      "section": "Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod.",
      "question_index": 1,
      "question": "Hardwarové předpoklady pro řízení přístupu do KS.",
      "answer": "• Procesy jsou vykonávány procesorem kontinuálně dokud OS nevyvolá službu nebo nejsou přeřušeny přerušovacím signálem\n• K přerušení může dojít pouze na hranicích instrukcí (po dokončení a před zahájením další)\n• Přístup k operační paměti je výlučný",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-20",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-hw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-20-02",
      "stable_id": "48827d28",
      "section_index": 20,
      "section": "Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod.",
      "question_index": 2,
      "question": "HW podpora pro řízení přístupu do KS, popis řešení.",
      "answer": "• Zákaz přerušení = běžící procesy nemohou být přerušeny jinými procesy, dokud není aktivován plánovač OS\n  ◦ ten může být aktivován systémovým voláním\nnebo časovač vygeneruje signál přerušení a procesor skočí na obslužnou rutinu do jádra\n• Speciální instrukce: (pokud bychom využili SW řešení s proměnnou locked a provedly operace pro čtení a zápis atomicky)\n• Test-and-set = v jedné operaci se atomicky přečte příznak (paměťové místo) a současně se nastaví\n  ◦ je-li příznak nastaven tak je KS obsazená, jinak smí proces vstoupit do KS\n• xchg = atomicky vymění obsah dvou operandů = lze využít jako instrukci\ntest_and_set\n  ◦ v každém z procesů se ve vstupní sekci nastaví lokální proměnná na obsazeno a\ninstrukcí xchg se vymění obsah s proměnnou určující obsazenost KS\n  ◦ výměna se provádí, dokud není přečtena hodnota ‘volná KS’",
      "points_hint": "2 + 3",
      "tags": [
        "BOSYS",
        "sekce-20",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-hw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-20-03",
      "stable_id": "8e820ecd",
      "section_index": 20,
      "section": "Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod.",
      "question_index": 3,
      "question": "Vlastností (nedostatky) HW řešení.",
      "answer": "• Zakázat přerušení nelze u víceprocesorových systémů (na dalším procesoru může běžet další proces)\n• Zvyšuje se latence systému = během zákazu se pozdrží reakce systému a zvýší se odezva\n• Zákaz a povolení jsou povolené pouze v privilegovaném režimu\n• Instrukce test-and-set trpí stejnými nedostatky jako SW řešení (aktivní čekání, problém s prioritním plánováním)\n  ◦ navíc není řešen požadavek omezeného čekání\n• Řeší pouze vzájemné vylučování, ostatní požadavky třeba řešit algoritmicky\n• Velmi krátká vstupní a výstupní sekce",
      "points_hint": "4 + 3",
      "tags": [
        "BOSYS",
        "sekce-20",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-hw-metod"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-21-01",
      "stable_id": "b0194629",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 1,
      "question": "Popis nástroje OS: semafor.",
      "answer": "• Řídí přístup do KS a synchronizuje procesy\n• Jádrová datová struktura, která kombinuje celočíselný čítač a frontu blokovaných procesů",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-21-02",
      "stable_id": "bfdf6110",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 2,
      "question": "Popis systémových volání semaforu.",
      "answer": "• init = inicializuje čítač na nezápornou hodnotu\n• wait = snižuje hodnotu čítače, je-li výsledek záporný, volající proces je blokován a zařazen do fronty\n• signal = zvyšuje hodnotu čítače a případně odblokuje blokované procesy",
      "points_hint": "1 + 2 + 2",
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-21-03",
      "stable_id": "cb239149",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 3,
      "question": "Popis řešení přístupu do KS používajícího semafor.",
      "answer": "• Inicializace čítače semaforu na počet procesů (typicky 1)\n• Ve vstupní sekci se volá operace wait\n• Ve výstupní sekci se volá operace signal",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-21-04",
      "stable_id": "65303b5f",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 4,
      "question": "Popis řešení synchronizace vláken pomocí semaforu.",
      "answer": "• Inicializace semaforu na nulu\n• Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-21-05",
      "stable_id": "d57e5c08",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 5,
      "question": "Definice problému obědvajících filozofů a jeho řešení pomocí semaforů.",
      "answer": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-22-01",
      "stable_id": "7bb5c87a",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 1,
      "question": "Popis nástroje OS: předávání zpráv.",
      "answer": "• Prostředek k předávání dat mezi procesy bez sdílené paměti\n• Send = pošle zprávu do fronty\n• Receive = přijme zprávu z fronty",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-22-02",
      "stable_id": "f959a7d9",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 2,
      "question": "Popis typické implementace (ne)blokování systémových volání pro předávání zpráv.",
      "answer": "• Send = Neblokující, je-li ve frontě místo a blokující pokud je fronta plná\n• Receive = Neblokující, je-li ve frontě dostupná zpráva a blokující, pokud je fronta prázdná",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-22-03",
      "stable_id": "d40cb3c4",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 3,
      "question": "Popis řešení KS používajícího frontu zpráv.",
      "answer": "• Do fronty zašleme tolik inicializačních zpráv, kolik procesů smí současně používat kód KS (typicky 1)\n• Vstupní sekce = volání receive\n• Výstupní sekce = volání send\n• První proces přijme init zprávu a vstoupí do KS, každé další volání receive je blokováno\ndokud není KS volná",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-22-04",
      "stable_id": "0fb8ec20",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 4,
      "question": "Popis řešení synchronizace vláken pomocí fronty zpráv.",
      "answer": "• Na začátku je fronta prázdná, procesy mají sdílenou proměnnou X\n• Provádějící proces provede výpočet X a pak pošle send signalizující jeho dokončení\n• Čekající proces čeká na dokončení a pak použije výslednou hodnotu",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-22-05",
      "stable_id": "0ad1908b",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 5,
      "question": "Definice problému svázaných producentů a konzumentů a jeho řešení pomocí fronty zpráv.",
      "answer": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n  ◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení = Frontu zpráv lze použít jako sklad a je třeba inicializovat max počet položek ve frontě\n  ◦ Producent SEND data do fronty/skladu\n  ◦ Konzument RECEIVE z fronty/skladu",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-23-01",
      "stable_id": "d5c464a8",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 1,
      "question": "Popis konceptu monitoru: jeho účel, struktura a základní vlastnosti.",
      "answer": "• Nástroj pro řešení vzájemného vylučování a synchronizace\n• Konstrukce velmi podobná třídě\n• Je to blok kódu s vlastními daty a metodami, do kterého může najednou vstoupit pouze jedno vlákno",
      "points_hint": "2 + 2",
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-23-02",
      "stable_id": "fd948369",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 2,
      "question": "Popis řešení KS pomocí monitoru.",
      "answer": "• Monitor zaručuje vzáj. vyluč. při spouštění svých funkcí\n• Stačí deklarovat sdílená data v monitoru a umístit KS do jeho funkce",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-23-03",
      "stable_id": "aa8166d3",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 3,
      "question": "Popis řešení synchronizace vláken pomocí monitoru.",
      "answer": "• Pokud má jedno vlákno provést akci, na kterou musí čekat jiné vlákno\n  → pro synch. lze použít podmínkovou proměnnou monitoru v kombinaci s proměnnou vypovídající o stavu dokončení akce",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-23-04",
      "stable_id": "d9663f1c",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 4,
      "question": "Definice problému svázaných producentů a konzumentů a jeho řešení pomocí monitoru, podmínky použité u synchronizace a zdůvodnění jejich použití.",
      "answer": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n  ◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení: v monitoru definujeme pole skladu, počet položek ve skladu, indexy pro volné a obsazené pozice a podm. proměnné signalizující obsazenost skladu\n• Při vkládání kontrolujeme, zda je sklad plný, pokud ano, čekáme na uvolnění\n  → jinak přidáme položku a navýšíme celkový počet položek\n• Při odebírání kontrolujeme, zda je sklad prázdný, pokud ano, čekáme na vložení položky\n  → jinak odebereme položku a snížíme celkový počet položek",
      "points_hint": "6",
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-24-01",
      "stable_id": "978e7bc7",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 1,
      "question": "Popis mutexu, účel a vlastnosti, popis funkcí.",
      "answer": "• Mutex = zámek pro řízení přístupu do KS\n• Nechá vstoupit pouze jedno vlákno\n• pthread_mutex_init(&m, NULL) = inicializace mutexu\n• pthread_mutex_lock(&m) = zamkne mutex, vlákno čeká\n• pthread_mutex_unlock(&m) = odemkne mutex, vláko se probudí\n• pthread_mutex_destroy(&m) = uvolní prostředky spojené s mutexem",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-24-02",
      "stable_id": "6551816c",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 2,
      "question": "Způsob použití mutexu.",
      "answer": "• Před vstupem do KS = pthread_mutex_lock\n• Po opuštění = pthread_mutex_unlock",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-24-03",
      "stable_id": "5b255e96",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 3,
      "question": "Bariéra: účel, použití a popis funkcí (včetně návratové hodnoty funkce čekání).",
      "answer": "• Speciální proměnná, pomocí které lze synchronizovat skupinu vláken\n• Vlákna se zastavují na bariéře, ta se odblokuje, když dorazí určitý počet vláken\n• pthread_barrier_init(&bar, &atrib, &count) = inicializace bariéry pro určitý počet\n• pthread_barrier_wait(&bar) = čekání na počet vláken\n  ◦ pokud se má provést nějaká jednorázová akce\n  → vrátí PTHREAD_BARRIER_SERIAL_THREAD jednomu vláknu, ostatním vrací 0\n• pthread_barrier_destroy(&bar) = uvolní prostředky spojené s bariérou",
      "points_hint": "1 + 4",
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-24-04",
      "stable_id": "5ac51bf8",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 4,
      "question": "Podmínková proměnná: účel, způsob použití a vlastnosti.",
      "answer": "• Umožňuje vláknům čekat na nějakou událost\n• Událost je signalizována operací condition_signal\n• využívá testy, aby zjistil, zda je třeba čekat\n• používá se společně s Mutexem pro vzájemné vylučování\n• pthread_cond_wait(&cond, &mutex) = uspání vlákna mutexem (čekání na událost)\n• pthread_cond_signal(&cond) = probuzení jednoho vlákna v reakci na událost",
      "points_hint": "1 + 4",
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-25-01",
      "stable_id": "79ce0ef8",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 1,
      "question": "Definice stavu uváznutí (deadlock).",
      "answer": "• je stav skupiny procesů/vláken, z nichž každý čeká na událost, kterou může vyvolat\nvýhradně jiný proces z této skupiny\n• TLDR: procesy uváznou a nemohou pokračovat",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-25-02",
      "stable_id": "8b2aad7f",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 2,
      "question": "Definice stavu vyhladovění (starvation), příklad.",
      "answer": "• Situace, kdy proces/vlákno čeká nekonečně dlouho na přístup k prostředku\n• Zpracovávání procesů na základě předpokládané délky do dokončení (SJF Alg.)\n  → pokud neustále přicházejí nové krátké procesy, ty dlouhé se nikdy nedostanou ke KS",
      "points_hint": "1",
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-25-03",
      "stable_id": "f73659bb",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 3,
      "question": "Vysvětlení podmínek pro vznik stavu uváznutí.",
      "answer": "• Vzájemné vylučování prostředků = nelze sdílet prostředky procesu\n• Alokace a čekání = proces může požadovat o další prostředky\n• Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem\n• Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus\n  ◦ p1 -> p2 -> ... -> pn -> p1",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-25-04",
      "stable_id": "0b58c3f0",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 4,
      "question": "Přístupy k řešení odstranění vzniklého stavu uváznutí.",
      "answer": "• Ignorování = pokud se děje velmi zřídka\n• Detekce a obnovení = násilné odebrání prostředku některému z procesů-> obnova/rollback\n• Prevence = negování jedné z podmínek vzniku\n• Vyhnutí = opatrná alokace zdrojů",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-25-05",
      "stable_id": "6aaf6f1b",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 5,
      "question": "Způsoby prevence vzniku stavu uváznutí.",
      "answer": "• Prev. Vzáj. Vylučování = umožnění sdílení prostředků více procesy\n  ◦ spooling -> fronta požadavků pro přenos dat na periferiích\n• Prev. Alokace a čekání = procesy jsou přinuceny sdílet všechny zdroje naráz\n• Prev. Neodnímatelných prost. = lze zavést možnost násilného odebrání\n• Prev. Cyklického čekání = definování lineárního uspořádání prostředků\n  ◦ přidělovat pouze prostředky s vyšším pořadovým číslem",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-25-06",
      "stable_id": "7e436749",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 6,
      "question": "Popis bankéřova algoritmu aplikovaného na procesy (s popisem stavů).",
      "answer": "• Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu\n• Bankéř má finance a půjčuje je klientům\n• Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá\n• Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny\n• Nebezpečný stav = situace, kdy může nastat zablokování\n  ◦ pokud všechny procesy budou požadovat pro své dokončení maximum zdrojů a ani\njednomu nebude moci systém vyhovět\n• Nutný pevný počet prostředků",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-26-01",
      "stable_id": "aafccbd0",
      "section_index": 26,
      "section": "IPC: komunikace procesů a vláken, možné prostředky komunikace.",
      "question_index": 1,
      "question": "Možné prostředky pro komunikaci procesů / vláken.",
      "answer": "• Pipes(roury)\n• Fronty zpráv\n• Shared Memory\n• Sockets\n• Signals\n• Semafor, bariéra, monitor",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-26",
        "ipc-komunikace-procesu-a-vlaken-mozne-prostredky-komunikace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-26-02",
      "stable_id": "5d3e8a4c",
      "section_index": 26,
      "section": "IPC: komunikace procesů a vláken, možné prostředky komunikace.",
      "question_index": 2,
      "question": "Krátká charakteristika prostředků pro komunikaci procesů / vláken.",
      "answer": "• Pipes = jednosměrná komunikace mezi příbuznými (ze stejného rodiče) procesy\n• Fronty zpráv = procesy posílají strukturované zprávy\n• Shared memory = procesy sdílejí část paměti, nejrychlejší, vyžaduje synchronizaci\n• Sockets = obecný prostředek pro kom. mezi počítači, podporuje TCP i UDP\n• Signals = asynchroní notifikace mezi procesy, lze jimi například ukončit/přerušit proces\n• Semofory = řízení přístupu ke sdíleným prostředkům a synchronizace procesů/vláken\n• Bariéra = synchronizace skupiny procesů/vláken\n• Monitor = vzájemné vylučování a synchronizace",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-26",
        "ipc-komunikace-procesu-a-vlaken-mozne-prostredky-komunikace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-26-03",
      "stable_id": "7d4aa97b",
      "section_index": 26,
      "section": "IPC: komunikace procesů a vláken, možné prostředky komunikace.",
      "question_index": 3,
      "question": "Popis funkcí pro sokety (alespoň pěti typů).",
      "answer": "• socket (domain, type, protocol) = vytvoří nový komunikační bod\n• bind (sockfd, addr, addrlen) = přidělí lokální adresy a porty (IP+port)\n• listen (sockfd, backlog) = přepne na poslechový stav (TCP)\n• accept (sockfd, addr, addlen*) = přijme příchozí spojení, vrátí nový socket\n• connect (sockfd, addr, addrlen*) = naváže spojení na server (TCP)\n• send ()/recv() = streamované odesílaní a příjem\n• sendto()/recvfrom() = datagramové (UDP) komunikace\n• close(sockfd) = uzavře socket",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-26",
        "ipc-komunikace-procesu-a-vlaken-mozne-prostredky-komunikace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-27-01",
      "stable_id": "23feab08",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 1,
      "question": "Popis důvodů pro rozdělení disku na oddíly.",
      "answer": "• Rozdělení logických oblastí (OS, data, záloha)\n• Možnost dual-bootu (možnost instalace vice OS)\n• Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek)\n• Řízení výkonu (různé parametry a souborové systémy)",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-27-02",
      "stable_id": "2378920d",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 2,
      "question": "Popis MBR a způsob dělení disku na oddíly.",
      "answer": "• Master Boot Record\n• prvních 512 B na disku, max. Velikost disku je 2 TB\n  ◦ bootloader 446 B + tabulka oddílů 64 B (každý 16 B) + hodnota platnosti 2 B\n• Max. 4 oddíly\n  ◦ 1-4 primární oddíly a pouze 1 rozšířený oddíl -> může obsahovat další logické oddíly",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-27-03",
      "stable_id": "43c5e648",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 3,
      "question": "Popis typů oddílů (pro dělení MBR).",
      "answer": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-27-04",
      "stable_id": "a148602d",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 4,
      "question": "Charakterizace GPT.",
      "answer": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-27-05",
      "stable_id": "9c6e9adf",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 5,
      "question": "Vysvětlení rozdílů mezi odkládacím prostorem (swap) na samostatném diskovém oddíle a v souboru.",
      "answer": "• Oddíl = trochu rychlejší, jednodušší, nelze dynamicky zvětšit\n• Soubor = flexibilnější velikost, snadná správa, mírně pomalejší (dodatečná vrstva FS)",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-28-01",
      "stable_id": "d60cf121",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 1,
      "question": "Popis obecné struktury souborových systémů a jejich metadat.",
      "answer": "• FS umožňuje uživatelům a procesům přístup k datům uložených v souborech\n• Soubory jsou univerzální forma dlouhodobého uložení dat v sekundární paměti\n• Jsou organizovány pomocí adresářů uspořádaných do stromu s jedním kořenem\n• Cesta vyjadřuje logické umístění souboru v adresové struktuře\n  ◦ rozlišujeme absolutní (od kořenového adresáře) a relativní (od aktuálního adresáře) cesty",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-28-02",
      "stable_id": "9ad1ec82",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 2,
      "question": "Metadata souborů vyjma oprávnění (alespoň šest).",
      "answer": "• UID vlastníka\n• GID skupiny\n• Název\n• Velikost souboru (v bajtech)\n• Časové údaje= vytvoření, poslední úpravy, poslední přístup\n• Počet odkazů (link count)\n• Typ souboru (regulární, adresář...)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-28-03",
      "stable_id": "5fb9a5a1",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 3,
      "question": "Možná oprávnění na soubor (alespoň šest).",
      "answer": "• Čtení (r)\n• Zápis (w)\n• Vykonání (x) pro uživatele, skupinu, ostatní\n• Přidání\n• Odebrání\n• Vytvoření\n• Změna práv",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-28-04",
      "stable_id": "89f7af1a",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 4,
      "question": "Popis zvláštních typů souborů (alespoň čtyř).",
      "answer": "→ Neobsahují reálná data, pouze na ně odkazují, nebo reprezentují jinou entitu\n• Hard link = nové jméno pro existující soubor, včetně jeho metadat\n• Symbolic link = soubor, v jehož datové části je uvedeno nové jméno\n• Named pipe = jednosměrný komunikační nástroj v podobě souboru\n  ◦ má 2 nezávislé ukazatele (pro čtení a pro zápis)\n• Bloková zařízení = náhodný přístup po blokích (disky)\n• Znaková zařízení = proudový přístup po bajtech (terminály, tiskárny, skenery)",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-28-05",
      "stable_id": "e603db72",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 5,
      "question": "Charakteristika typů odkazů a jejich reprezentace na souborovém systému.",
      "answer": "• Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata\n  ◦ jedná se spíše o vlastnost souborového systému\n  ◦ nové a původní jméno souboru nelze odlišit\n  ◦ k uvolnění dat dojde po odstranění posledního hard linku\n  ◦ nelze vytvářet mezi různými FS a na adresářích\n• Symbolický link = speciální soubor obsahující cestu k jinému souboru či adresáři\n  ◦ V datové části uvedeno nové jméno\n  ◦ Při přístupu k odkazu provede systém textovou záměnu jmen (jméno symLinku\nnahradí nové jméno)\n  ◦ pokud cílový soubor není, odkaz zůstane zlomený (dangling)",
      "points_hint": "2 + 2",
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-29-01",
      "stable_id": "c065fdbe",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 1,
      "question": "Popis příčiny vzniku nekonzistence metadat souborového systému.",
      "answer": "• Fáze zápisu do souboru:\n  ◦ alokace nových bloků ve FS\n  ◦ fyzický zápis dat\n  ◦ aktualizace metadat souboru\n• Při pádu systému či ztrátě napájení mezi těmito kroky zůstávají některé bloky označeny\njako volné i přesto, že obsahují data, nebo naopak -> NEKONZISTENCE",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-29-02",
      "stable_id": "362b4980",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 2,
      "question": "Popis principu žurnálování (včetně nevýhod) a činnost obnovy konzistence po pádu.",
      "answer": "• Kruhový buffer, do kterého se zapisují prováděné změny metadat či dat\n• Před změnou metadat se do “žurnálu” napíše krátký log o změně\n• Po pádu se přečtou nedokončené záznamy z žurnálu a provede se dokončení či navrácení\n• Nevýhody = menší výkon, protože se zapisuje na 2 místa (žurnál a místo změny)",
      "points_hint": "5",
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-29-03",
      "stable_id": "0243c4b0",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 3,
      "question": "Popis principu metody copy‑on‑write (včetně nevýhod) a činnost obnovy konzistence po pádu.",
      "answer": "• Nikdy nemodifikuje bloky na místě\n• Odkládá kopírování dat až do chvíle, kdy je skutečně potřeba změna\n• Při potřebě přepsat nějaký blok se modifikuje kopie původního bloku a ta se zapíše do nově alokovaného prostoru, starý blok může být smazán\n• Souborový systém je tedy vždy konzistentní\n• Nevýhody = vyšší využití místa, složitější implementace",
      "points_hint": "4",
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-29-04",
      "stable_id": "2ed5cf60",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 4,
      "question": "Příklady souborových systémů ve vztahu k metodě zachování konzistence, alespoň dva různé pro každou metodu (nikoliv různé verze téhož), pro žurnálování zvlášť po dvou příkladech pro dvojí způsob.",
      "answer": "• Journaling (metadata-only) = ext3, NTFS\n• Journaling (metadata + data) = ext4, ReiserFS\n• Copy-on-write = Btrfs(Linux), ZFS(Solaris)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-30-01",
      "stable_id": "c48505b6",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 1,
      "question": "Popis typů úložišť (DAS, NAS, SAN) s příklady.",
      "answer": "• DAS (Direct-Attached Storage)\n  ◦ interní/externí disk připojený přímo k serveru nebo PC\n  ◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní\n  ◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery\n  ◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID)\n• NAS (Network-Attached Storage)\n  ◦ zařízení připojené do Ethernetové síťe, poskytuje souborové služby přes síť\n  ◦ +Snadné sdílení mezi více uživateli, -Závislé na LAN\n  ◦ Příklad: Synology DiskStation, QNAP TS-series, Cloud server\n• SAN (Storage Area Network)\n  ◦ Vyhrazená vysokorychlostní síť\n  ◦ poskytuje blokové úložiště vzdáleně\n  ◦ +Vysoká propustnost a nízká latence, -Vyšší cena a složítá správa\n  ◦ Příklad: Fibre Channel",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-30-02",
      "stable_id": "8fb70a28",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 2,
      "question": "Charakteristika RAID (způsob zapojení včetně minimálního počtu disků a principu ukládání dat, odolnost, rychlost R/W).",
      "answer": "RAID je zapojení více disků do pole kvůli rychlosti, kapacitě nebo odolnosti.\n• RAID 0: striping, min. 2 disky, rychlý, bez redundance.\n• RAID 1: mirroring, min. 2 disky, data jsou zrcadlena, lepší čtení a odolnost proti výpadku jednoho disku.\n• RAID 5: striping s distribuovanou paritou, min. 3 disky, odolá výpadku jednoho disku, zápis je pomalejší kvůli paritě.",
      "points_hint": null,
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-30-03",
      "stable_id": "73aafe16",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 3,
      "question": "RAID 0.",
      "answer": "• Striping\n  ◦ data jsou rozdělena na bloky a ukládají se střídavě na více disků v poli\n• min. 2 disky, vysoká rychlost, žádná odolnost (selže-li jeden disk, přijdeme o všechna data)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-30-04",
      "stable_id": "8e77edf4",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 4,
      "question": "RAID 1.",
      "answer": "• Mirroring\n  ◦ data jsou zapisována identicky na 2 nebo více disků\n• min. 2 disky, plná redundance, čtení rychle, odolný vůči pádu jednoho disku\n• poloviční využití kapacity (2x disky, 1x data)",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-30-05",
      "stable_id": "df3e0c49",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 5,
      "question": "RAID 5.",
      "answer": "• Striping s distribuovanou paritou (informace pro obnovu dat)\n• min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-30-06",
      "stable_id": "fb2d6f14",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 6,
      "question": "Charakteristika možných způsobů alokace dat pro soubory.",
      "answer": "• Kontinuální\n  ◦ každému souboru je vyhrazena jedna souvislá oblast bloků\n  ◦ +rychlé čtení, -vnější fragmentace\n• Propojené (linked)\n  ◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku\n  ◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení\n• Indexované\n  ◦ pro každý soubor existuje indexový blok, který obsahuje seznam všech adres bloků\n  ◦ +žádná vnější fragmentace, rychlý přímý přístup, -bloky zabírají více paměti",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-31-01",
      "stable_id": "665bca35",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 1,
      "question": "Definice pojmů autentizace a autorizace.",
      "answer": "• Autentizace = ověření identity\n• Autorizace = ověření oprávnění",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-31-02",
      "stable_id": "7d2f425b",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 2,
      "question": "Možné metody autentizace (alespoň čtyři).",
      "answer": "• Heslo\n• Klíč\n• Certifikát\n• Biometrie\n• OTP/ TOTP (token nebo časový kód)",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-31-03",
      "stable_id": "dc0978e8",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 3,
      "question": "Popis principu zabezpečení přihlašování pomocí protokolu SSH.",
      "answer": "• Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta\n  ◦ klient se autorizuje dešifrací pomocí privátního klíče\n• Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče\n• Ověření hostitele (host key) = klient ukládá fingerprint serveru",
      "points_hint": "3",
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-31-04",
      "stable_id": "0d5a5681",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 4,
      "question": "Riziko přihlašování pomocí protokolu SSH a jak mu předcházet.",
      "answer": "• Krádež privátního klíče\n  → používat silnou passphrase na privátní klíč\n• Man-In-The-Middle útoky = klient může důvěřovat falešnému serveru (zachycení nového fingerprintu)\n  → validovat host key první připojení\n• Brute-force = útočník opakovaně zkouší hesla\n  → použít fail2ban, rate-limiting",
      "points_hint": "2 + 2",
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-31-05",
      "stable_id": "93e9592b",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 5,
      "question": "Zásady tvorby hesla (čtyři nejdůležitější).",
      "answer": "• Délka min. 12 znaků\n• Kombinace velkých a malých písmen, číslic a speciálních znaků\n• Žádné slovníky ani osobní údaje\n• Používat různá hesla pro jiné účty",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    },
    {
      "id": "bosys-31-06",
      "stable_id": "79d5e697",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 6,
      "question": "Popis alespoň čtyř typů útoků na systém.",
      "answer": "• Trojské koně (nevinně vypadající program se škodlivou “funkcí”)\n• Login spoofing (imitace přihlašovací obrazovky)\n• Viry, červy\n• Man In The Middle (odposlech)\n• Denial of Service (odmítnutí služby)",
      "points_hint": "2",
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace"
      ],
      "source": "BOSYS.zip / Teorie / Operační-systémy-Otázky-na-zkoušku.docx + Vlozeny text.txt"
    }
  ]
};