window.ABCD_DATA = {
  "deck": "BOSYS zkouška – ABCD testy",
  "language": "cs",
  "format_version": "1.0",
  "question_count": 151,
  "section_count": 31,
  "source_deck": "BOSYS zkouška – kartičky",
  "design_note": "Každá otázka má jednu správnou odpověď. Distraktory jsou většinou pravdivé odpovědi z jiných kartiček, aby se uživatel neučil fakticky chybné nesmysly; jsou ale v nesprávném kontextu pro danou otázku.",
  "schema": {
    "id": "string, ID ABCD otázky",
    "source_card_id": "string, ID původní kartičky",
    "section_index": "number",
    "section": "string",
    "question_index": "number",
    "type": "single_choice_abcd",
    "question": "string",
    "options": {
      "a": "string",
      "b": "string",
      "c": "string",
      "d": "string"
    },
    "correct": "string, jedna z hodnot a/b/c/d",
    "correct_answer": "string, plná správná odpověď",
    "explanation": "string, krátké vysvětlení",
    "option_source_card_ids": "object, odkud pochází text jednotlivých možností",
    "tags": "array<string>",
    "points_hint": "string|null"
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
  "questions": [
    {
      "id": "bosys-abcd-01-01",
      "source_card_id": "bosys-01-01",
      "stable_id": "044c472e",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Dvě základní funkce OS (s vysvětlením).",
      "options": {
        "a": "• preemptivní plánování procesů\n• zajištění izolace procesů a uživatelů\n• správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy)\n• podpora IPC = komunikace a synchronizace procesů",
        "b": "• read = čtení ze souboru\n• open = otevření souboru\n• exec = nahradí proces jiným programem\n• fork = vytvoří nový proces (duplikací)",
        "c": "• Abstrakce = procesy, vlákna a jejich interakce\n◦ správa operační paměti, I/O, úložiště\n◦ souborový systém, paměť\n• Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu",
        "d": "• Správa prostředků = přidělování CPU (plánování), přidělování paměti (alokace,\nstránkování), přidělování zařízení I/O\n• Zjednodušující rozhraní (abstrakce a virtualizace HW) = umožňuje programům a\nuživatelům komunikovat s hardwarem"
      },
      "correct": "d",
      "correct_answer": "• Správa prostředků = přidělování CPU (plánování), přidělování paměti (alokace,\nstránkování), přidělování zařízení I/O\n• Zjednodušující rozhraní (abstrakce a virtualizace HW) = umožňuje programům a\nuživatelům komunikovat s hardwarem",
      "explanation": "Správná možnost odpovídá původní kartičce: • Správa prostředků = přidělování CPU (plánování), přidělování paměti (alokace, stránkování), přidělování zařízení I/O • Zjednodušující rozhraní (abstrakce a virtualizace HW) = umožňuje programům a uživatelům komunikovat s hardwarem Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-01-02",
        "b": "bosys-01-06",
        "c": "bosys-01-04",
        "d": "bosys-01-01"
      },
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-01-02",
      "source_card_id": "bosys-01-02",
      "stable_id": "860ee9a5",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Vlastnosti moderního OS.",
      "options": {
        "a": "• Abstrakce = procesy, vlákna a jejich interakce\n◦ správa operační paměti, I/O, úložiště\n◦ souborový systém, paměť\n• Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu",
        "b": "• preemptivní plánování procesů\n• zajištění izolace procesů a uživatelů\n• správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy)\n• podpora IPC = komunikace a synchronizace procesů",
        "c": "• Správa prostředků = přidělování CPU (plánování), přidělování paměti (alokace,\nstránkování), přidělování zařízení I/O\n• Zjednodušující rozhraní (abstrakce a virtualizace HW) = umožňuje programům a\nuživatelům komunikovat s hardwarem",
        "d": "1. Uložení parametru na stack\n2. Volání funkce v knihovně\n3. Knihovna nastaví registr na typ volání\n4. Skok do jádra (instrukcí TRAP)\n5. Jádro provede vyhodnocení služby a volá příslušný ovladač nebo funkci\n6. Po dokončení může následovat návrat do knihovny a zpět do procesu\n• volání může být blokující, OS může mezi tím aktivovat jiný proces"
      },
      "correct": "b",
      "correct_answer": "• preemptivní plánování procesů\n• zajištění izolace procesů a uživatelů\n• správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy)\n• podpora IPC = komunikace a synchronizace procesů",
      "explanation": "Správná možnost odpovídá původní kartičce: • preemptivní plánování procesů • zajištění izolace procesů a uživatelů • správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy) • podpora IPC = komunikace a synchronizace procesů Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-01-04",
        "b": "bosys-01-02",
        "c": "bosys-01-01",
        "d": "bosys-01-05"
      },
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-01-03",
      "source_card_id": "bosys-01-03",
      "stable_id": "5a083849",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Typy OS podle účelu (alespoň šest).",
      "options": {
        "a": "• Mainframe\n• Serverové\n• víceprocesorové (clustery)\n• pro osobní PC\n• Real-Time\n• vestavěné",
        "b": "• preemptivní plánování procesů\n• zajištění izolace procesů a uživatelů\n• správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy)\n• podpora IPC = komunikace a synchronizace procesů",
        "c": "• Správa prostředků = přidělování CPU (plánování), přidělování paměti (alokace,\nstránkování), přidělování zařízení I/O\n• Zjednodušující rozhraní (abstrakce a virtualizace HW) = umožňuje programům a\nuživatelům komunikovat s hardwarem",
        "d": "• Abstrakce = procesy, vlákna a jejich interakce\n◦ správa operační paměti, I/O, úložiště\n◦ souborový systém, paměť\n• Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu"
      },
      "correct": "a",
      "correct_answer": "• Mainframe\n• Serverové\n• víceprocesorové (clustery)\n• pro osobní PC\n• Real-Time\n• vestavěné",
      "explanation": "Správná možnost odpovídá původní kartičce: • Mainframe • Serverové • víceprocesorové (clustery) • pro osobní PC • Real-Time • vestavěné Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-01-03",
        "b": "bosys-01-02",
        "c": "bosys-01-01",
        "d": "bosys-01-04"
      },
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-01-04",
      "source_card_id": "bosys-01-04",
      "stable_id": "3bcac294",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Reprezentace abstrakcí (koncepcí) v OS a definice systémového volání.",
      "options": {
        "a": "1. Uložení parametru na stack\n2. Volání funkce v knihovně\n3. Knihovna nastaví registr na typ volání\n4. Skok do jádra (instrukcí TRAP)\n5. Jádro provede vyhodnocení služby a volá příslušný ovladač nebo funkci\n6. Po dokončení může následovat návrat do knihovny a zpět do procesu\n• volání může být blokující, OS může mezi tím aktivovat jiný proces",
        "b": "• Abstrakce = procesy, vlákna a jejich interakce\n◦ správa operační paměti, I/O, úložiště\n◦ souborový systém, paměť\n• Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu",
        "c": "• read = čtení ze souboru\n• open = otevření souboru\n• exec = nahradí proces jiným programem\n• fork = vytvoří nový proces (duplikací)",
        "d": "• Mainframe\n• Serverové\n• víceprocesorové (clustery)\n• pro osobní PC\n• Real-Time\n• vestavěné"
      },
      "correct": "b",
      "correct_answer": "• Abstrakce = procesy, vlákna a jejich interakce\n◦ správa operační paměti, I/O, úložiště\n◦ souborový systém, paměť\n• Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu",
      "explanation": "Správná možnost odpovídá původní kartičce: • Abstrakce = procesy, vlákna a jejich interakce ◦ správa operační paměti, I/O, úložiště ◦ souborový systém, paměť • Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-01-05",
        "b": "bosys-01-04",
        "c": "bosys-01-06",
        "d": "bosys-01-03"
      },
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-01-05",
      "source_card_id": "bosys-01-05",
      "stable_id": "bd812ecb",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Průběh systémového volání.",
      "options": {
        "a": "• preemptivní plánování procesů\n• zajištění izolace procesů a uživatelů\n• správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy)\n• podpora IPC = komunikace a synchronizace procesů",
        "b": "• Mainframe\n• Serverové\n• víceprocesorové (clustery)\n• pro osobní PC\n• Real-Time\n• vestavěné",
        "c": "1. Uložení parametru na stack\n2. Volání funkce v knihovně\n3. Knihovna nastaví registr na typ volání\n4. Skok do jádra (instrukcí TRAP)\n5. Jádro provede vyhodnocení služby a volá příslušný ovladač nebo funkci\n6. Po dokončení může následovat návrat do knihovny a zpět do procesu\n• volání může být blokující, OS může mezi tím aktivovat jiný proces",
        "d": "• read = čtení ze souboru\n• open = otevření souboru\n• exec = nahradí proces jiným programem\n• fork = vytvoří nový proces (duplikací)"
      },
      "correct": "c",
      "correct_answer": "1. Uložení parametru na stack\n2. Volání funkce v knihovně\n3. Knihovna nastaví registr na typ volání\n4. Skok do jádra (instrukcí TRAP)\n5. Jádro provede vyhodnocení služby a volá příslušný ovladač nebo funkci\n6. Po dokončení může následovat návrat do knihovny a zpět do procesu\n• volání může být blokující, OS může mezi tím aktivovat jiný proces",
      "explanation": "Správná možnost odpovídá původní kartičce: 1. Uložení parametru na stack 2. Volání funkce v knihovně 3. Knihovna nastaví registr na typ volání 4. Skok do jádra (instrukcí TRAP) 5. Jádro provede vyhodnocení služby a volá příslušný ovladač nebo funkci 6. Po dokončení může následovat návrat do knihovny a zpět do procesu • volání může být blokující, OS může mezi tím aktivovat jiný proces Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-01-02",
        "b": "bosys-01-03",
        "c": "bosys-01-05",
        "d": "bosys-01-06"
      },
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-01-06",
      "source_card_id": "bosys-01-06",
      "stable_id": "a45027c0",
      "section_index": 1,
      "section": "Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Příklady systémových volání a co obstarvají (alespoň tři).",
      "options": {
        "a": "• preemptivní plánování procesů\n• zajištění izolace procesů a uživatelů\n• správa paměti (Operační = virtualizace, sekundární = úložiště, souborové systémy)\n• podpora IPC = komunikace a synchronizace procesů",
        "b": "• read = čtení ze souboru\n• open = otevření souboru\n• exec = nahradí proces jiným programem\n• fork = vytvoří nový proces (duplikací)",
        "c": "1. Uložení parametru na stack\n2. Volání funkce v knihovně\n3. Knihovna nastaví registr na typ volání\n4. Skok do jádra (instrukcí TRAP)\n5. Jádro provede vyhodnocení služby a volá příslušný ovladač nebo funkci\n6. Po dokončení může následovat návrat do knihovny a zpět do procesu\n• volání může být blokující, OS může mezi tím aktivovat jiný proces",
        "d": "• Abstrakce = procesy, vlákna a jejich interakce\n◦ správa operační paměti, I/O, úložiště\n◦ souborový systém, paměť\n• Systémové volání = volání služeb jádra OS, obvykle probíhá přes knihovnu"
      },
      "correct": "b",
      "correct_answer": "• read = čtení ze souboru\n• open = otevření souboru\n• exec = nahradí proces jiným programem\n• fork = vytvoří nový proces (duplikací)",
      "explanation": "Správná možnost odpovídá původní kartičce: • read = čtení ze souboru • open = otevření souboru • exec = nahradí proces jiným programem • fork = vytvoří nový proces (duplikací) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-01-02",
        "b": "bosys-01-06",
        "c": "bosys-01-05",
        "d": "bosys-01-04"
      },
      "tags": [
        "BOSYS",
        "sekce-01",
        "definice-os-typy-os-design-os-abstrakce-a",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-02-01",
      "source_card_id": "bosys-02-01",
      "stable_id": "2eb291d4",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Definice monolitického jádra OS.",
      "options": {
        "a": "• Multiprograming pomocí Virtual Machine\n• Jádro emuluje celé virtuální stroje\n• Virtualizované jádro OS izoluje samostatné prostředí, přičemž jádro běží pouze jedenkrát\n• OS Solaris, Linux V-Server",
        "b": "• každá funkce může být volána libovolnou jinou\n• z hlediska hierarchie volání procedur je jádro vnitřně nečleněné\n◦ > každá část muže přímo ovlivnit libovolnou jinou\n• všechny hlavní služby běží v jednom velkém adresním prostoru",
        "c": "• Jádro je rozděleno do hierarchických vrstev\n• Každá vrstva smí volat pouze procedury své vlastní vrstvy nebo nejbližší nižší\n• Rozdíl od monolitického = strukturované rozčlenění a omezení vzájemného volání",
        "d": "• oddělená část se základními funkcemi, pracuje v Kernel-režimu\n• nejjednodušší jádro, přehledný kód, nižší chybnost a vyšší spolehlivost\n• poskytuje pouze základní funkce (správa paměti, komunikace mezi procesy, plánování)"
      },
      "correct": "b",
      "correct_answer": "• každá funkce může být volána libovolnou jinou\n• z hlediska hierarchie volání procedur je jádro vnitřně nečleněné\n◦ > každá část muže přímo ovlivnit libovolnou jinou\n• všechny hlavní služby běží v jednom velkém adresním prostoru",
      "explanation": "Správná možnost odpovídá původní kartičce: • každá funkce může být volána libovolnou jinou • z hlediska hierarchie volání procedur je jádro vnitřně nečleněné ◦ > každá část muže přímo ovlivnit libovolnou jinou • všechny hlavní služby běží v jednom velkém adresním prostoru Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-02-05",
        "b": "bosys-02-01",
        "c": "bosys-02-02",
        "d": "bosys-02-03"
      },
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-02-02",
      "source_card_id": "bosys-02-02",
      "stable_id": "d87e9baf",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Definice vrstveného jádra OS a čím se liší od monolitického s vnitřní strukturou vrstev.",
      "options": {
        "a": "• Monolitické = Linux, Windows NT\n• Vrstvené = MULTICS, THE OS\n• Mikrojádro = Minix, QNX",
        "b": "• oddělená část se základními funkcemi, pracuje v Kernel-režimu\n• nejjednodušší jádro, přehledný kód, nižší chybnost a vyšší spolehlivost\n• poskytuje pouze základní funkce (správa paměti, komunikace mezi procesy, plánování)",
        "c": "• Multiprograming pomocí Virtual Machine\n• Jádro emuluje celé virtuální stroje\n• Virtualizované jádro OS izoluje samostatné prostředí, přičemž jádro běží pouze jedenkrát\n• OS Solaris, Linux V-Server",
        "d": "• Jádro je rozděleno do hierarchických vrstev\n• Každá vrstva smí volat pouze procedury své vlastní vrstvy nebo nejbližší nižší\n• Rozdíl od monolitického = strukturované rozčlenění a omezení vzájemného volání"
      },
      "correct": "d",
      "correct_answer": "• Jádro je rozděleno do hierarchických vrstev\n• Každá vrstva smí volat pouze procedury své vlastní vrstvy nebo nejbližší nižší\n• Rozdíl od monolitického = strukturované rozčlenění a omezení vzájemného volání",
      "explanation": "Správná možnost odpovídá původní kartičce: • Jádro je rozděleno do hierarchických vrstev • Každá vrstva smí volat pouze procedury své vlastní vrstvy nebo nejbližší nižší • Rozdíl od monolitického = strukturované rozčlenění a omezení vzájemného volání Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-02-06",
        "b": "bosys-02-03",
        "c": "bosys-02-05",
        "d": "bosys-02-02"
      },
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-02-03",
      "source_card_id": "bosys-02-03",
      "stable_id": "f2e6b83b",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Definice mikrojádra OS a které funkce zajišťuje.",
      "options": {
        "a": "• oddělená část se základními funkcemi, pracuje v Kernel-režimu\n• nejjednodušší jádro, přehledný kód, nižší chybnost a vyšší spolehlivost\n• poskytuje pouze základní funkce (správa paměti, komunikace mezi procesy, plánování)",
        "b": "• ostatní služby jsou spouštěny v uživatelském prostoru jako samostatné démony\n• komunikují s mikrojádrem pomocí IPC kanálů",
        "c": "• každá funkce může být volána libovolnou jinou\n• z hlediska hierarchie volání procedur je jádro vnitřně nečleněné\n◦ > každá část muže přímo ovlivnit libovolnou jinou\n• všechny hlavní služby běží v jednom velkém adresním prostoru",
        "d": "• Multiprograming pomocí Virtual Machine\n• Jádro emuluje celé virtuální stroje\n• Virtualizované jádro OS izoluje samostatné prostředí, přičemž jádro běží pouze jedenkrát\n• OS Solaris, Linux V-Server"
      },
      "correct": "a",
      "correct_answer": "• oddělená část se základními funkcemi, pracuje v Kernel-režimu\n• nejjednodušší jádro, přehledný kód, nižší chybnost a vyšší spolehlivost\n• poskytuje pouze základní funkce (správa paměti, komunikace mezi procesy, plánování)",
      "explanation": "Správná možnost odpovídá původní kartičce: • oddělená část se základními funkcemi, pracuje v Kernel-režimu • nejjednodušší jádro, přehledný kód, nižší chybnost a vyšší spolehlivost • poskytuje pouze základní funkce (správa paměti, komunikace mezi procesy, plánování) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-02-03",
        "b": "bosys-02-04",
        "c": "bosys-02-01",
        "d": "bosys-02-05"
      },
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-02-04",
      "source_card_id": "bosys-02-04",
      "stable_id": "99b7b345",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Jak jsou v OS s mikrojádrem zajištěny ostatní funkcionality (které nejsou v mikrojádru).",
      "options": {
        "a": "• Monolitické = Linux, Windows NT\n• Vrstvené = MULTICS, THE OS\n• Mikrojádro = Minix, QNX",
        "b": "• každá funkce může být volána libovolnou jinou\n• z hlediska hierarchie volání procedur je jádro vnitřně nečleněné\n◦ > každá část muže přímo ovlivnit libovolnou jinou\n• všechny hlavní služby běží v jednom velkém adresním prostoru",
        "c": "• Jádro je rozděleno do hierarchických vrstev\n• Každá vrstva smí volat pouze procedury své vlastní vrstvy nebo nejbližší nižší\n• Rozdíl od monolitického = strukturované rozčlenění a omezení vzájemného volání",
        "d": "• ostatní služby jsou spouštěny v uživatelském prostoru jako samostatné démony\n• komunikují s mikrojádrem pomocí IPC kanálů"
      },
      "correct": "d",
      "correct_answer": "• ostatní služby jsou spouštěny v uživatelském prostoru jako samostatné démony\n• komunikují s mikrojádrem pomocí IPC kanálů",
      "explanation": "Správná možnost odpovídá původní kartičce: • ostatní služby jsou spouštěny v uživatelském prostoru jako samostatné démony • komunikují s mikrojádrem pomocí IPC kanálů Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-02-06",
        "b": "bosys-02-01",
        "c": "bosys-02-02",
        "d": "bosys-02-04"
      },
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-02-05",
      "source_card_id": "bosys-02-05",
      "stable_id": "7410d534",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Definice virtualizace na úrovni jádra OS s příkladem.",
      "options": {
        "a": "• oddělená část se základními funkcemi, pracuje v Kernel-režimu\n• nejjednodušší jádro, přehledný kód, nižší chybnost a vyšší spolehlivost\n• poskytuje pouze základní funkce (správa paměti, komunikace mezi procesy, plánování)",
        "b": "• ostatní služby jsou spouštěny v uživatelském prostoru jako samostatné démony\n• komunikují s mikrojádrem pomocí IPC kanálů",
        "c": "• Monolitické = Linux, Windows NT\n• Vrstvené = MULTICS, THE OS\n• Mikrojádro = Minix, QNX",
        "d": "• Multiprograming pomocí Virtual Machine\n• Jádro emuluje celé virtuální stroje\n• Virtualizované jádro OS izoluje samostatné prostředí, přičemž jádro běží pouze jedenkrát\n• OS Solaris, Linux V-Server"
      },
      "correct": "d",
      "correct_answer": "• Multiprograming pomocí Virtual Machine\n• Jádro emuluje celé virtuální stroje\n• Virtualizované jádro OS izoluje samostatné prostředí, přičemž jádro běží pouze jedenkrát\n• OS Solaris, Linux V-Server",
      "explanation": "Správná možnost odpovídá původní kartičce: • Multiprograming pomocí Virtual Machine • Jádro emuluje celé virtuální stroje • Virtualizované jádro OS izoluje samostatné prostředí, přičemž jádro běží pouze jedenkrát • OS Solaris, Linux V-Server Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-02-03",
        "b": "bosys-02-04",
        "c": "bosys-02-06",
        "d": "bosys-02-05"
      },
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-02-06",
      "source_card_id": "bosys-02-06",
      "stable_id": "4840b3f4",
      "section_index": 2,
      "section": "Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Příklady OS různých architektur jádra (monolitické, vrstvené, mikrojádro).",
      "options": {
        "a": "• Monolitické = Linux, Windows NT\n• Vrstvené = MULTICS, THE OS\n• Mikrojádro = Minix, QNX",
        "b": "• ostatní služby jsou spouštěny v uživatelském prostoru jako samostatné démony\n• komunikují s mikrojádrem pomocí IPC kanálů",
        "c": "• Jádro je rozděleno do hierarchických vrstev\n• Každá vrstva smí volat pouze procedury své vlastní vrstvy nebo nejbližší nižší\n• Rozdíl od monolitického = strukturované rozčlenění a omezení vzájemného volání",
        "d": "• každá funkce může být volána libovolnou jinou\n• z hlediska hierarchie volání procedur je jádro vnitřně nečleněné\n◦ > každá část muže přímo ovlivnit libovolnou jinou\n• všechny hlavní služby běží v jednom velkém adresním prostoru"
      },
      "correct": "a",
      "correct_answer": "• Monolitické = Linux, Windows NT\n• Vrstvené = MULTICS, THE OS\n• Mikrojádro = Minix, QNX",
      "explanation": "Správná možnost odpovídá původní kartičce: • Monolitické = Linux, Windows NT • Vrstvené = MULTICS, THE OS • Mikrojádro = Minix, QNX Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-02-06",
        "b": "bosys-02-04",
        "c": "bosys-02-02",
        "d": "bosys-02-01"
      },
      "tags": [
        "BOSYS",
        "sekce-02",
        "architektura-jadra-os-monoliticky-system-vrstveny-system-virtualizace",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-03-01",
      "source_card_id": "bosys-03-01",
      "stable_id": "046c739c",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Hlavní obecné cíle návrhu OS.",
      "options": {
        "a": "• Efektivita\n• Spolehlivost a stabilita\n• Bezpečnost\n• Uživatelská přívětivost\n• Přenositelnost",
        "b": "• Modularita a abstrakce\n• Jednoduchost (dělání jedno věci dobře) a úplnost\n• Kompozice\n• Textové, čitelné rozhraní\n• Efektivita implementace",
        "c": "• Současná práce více procesů\n• Nutnost vysoké spolehlivosti\n• Komplexita interakcí\n• Nutnost podpory různorodého HW\n• Zpětná kompatibilita\n• Přenositelnost\n• Konkurence\n• Životnost\n• Ochrana\n• Sdílení",
        "d": "• Procesy = MMU a ochrana adresního prostoru, úrovně oprávnění\n• Data = přístupová práva, šifrování disku\n• Přenos dat = šifrované protokoly (TLS, SSH), VPN, digitální podpisy"
      },
      "correct": "a",
      "correct_answer": "• Efektivita\n• Spolehlivost a stabilita\n• Bezpečnost\n• Uživatelská přívětivost\n• Přenositelnost",
      "explanation": "Správná možnost odpovídá původní kartičce: • Efektivita • Spolehlivost a stabilita • Bezpečnost • Uživatelská přívětivost • Přenositelnost Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-03-01",
        "b": "bosys-03-03",
        "c": "bosys-03-02",
        "d": "bosys-03-04"
      },
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-03-02",
      "source_card_id": "bosys-03-02",
      "stable_id": "6d9de63f",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Důvody náročnosti návrhu OS.",
      "options": {
        "a": "• Současná práce více procesů\n• Nutnost vysoké spolehlivosti\n• Komplexita interakcí\n• Nutnost podpory různorodého HW\n• Zpětná kompatibilita\n• Přenositelnost\n• Konkurence\n• Životnost\n• Ochrana\n• Sdílení",
        "b": "• Efektivita\n• Spolehlivost a stabilita\n• Bezpečnost\n• Uživatelská přívětivost\n• Přenositelnost",
        "c": "• Procesy = MMU a ochrana adresního prostoru, úrovně oprávnění\n• Data = přístupová práva, šifrování disku\n• Přenos dat = šifrované protokoly (TLS, SSH), VPN, digitální podpisy",
        "d": "• Modularita a abstrakce\n• Jednoduchost (dělání jedno věci dobře) a úplnost\n• Kompozice\n• Textové, čitelné rozhraní\n• Efektivita implementace"
      },
      "correct": "a",
      "correct_answer": "• Současná práce více procesů\n• Nutnost vysoké spolehlivosti\n• Komplexita interakcí\n• Nutnost podpory různorodého HW\n• Zpětná kompatibilita\n• Přenositelnost\n• Konkurence\n• Životnost\n• Ochrana\n• Sdílení",
      "explanation": "Správná možnost odpovídá původní kartičce: • Současná práce více procesů • Nutnost vysoké spolehlivosti • Komplexita interakcí • Nutnost podpory různorodého HW • Zpětná kompatibilita • Přenositelnost • Konkurence • Životnost • Ochrana • Sdílení Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-03-02",
        "b": "bosys-03-01",
        "c": "bosys-03-04",
        "d": "bosys-03-03"
      },
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-03-03",
      "source_card_id": "bosys-03-03",
      "stable_id": "6bbbceeb",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Principy vývoje OS.",
      "options": {
        "a": "• Efektivita\n• Spolehlivost a stabilita\n• Bezpečnost\n• Uživatelská přívětivost\n• Přenositelnost",
        "b": "• Současná práce více procesů\n• Nutnost vysoké spolehlivosti\n• Komplexita interakcí\n• Nutnost podpory různorodého HW\n• Zpětná kompatibilita\n• Přenositelnost\n• Konkurence\n• Životnost\n• Ochrana\n• Sdílení",
        "c": "• Procesy = MMU a ochrana adresního prostoru, úrovně oprávnění\n• Data = přístupová práva, šifrování disku\n• Přenos dat = šifrované protokoly (TLS, SSH), VPN, digitální podpisy",
        "d": "• Modularita a abstrakce\n• Jednoduchost (dělání jedno věci dobře) a úplnost\n• Kompozice\n• Textové, čitelné rozhraní\n• Efektivita implementace"
      },
      "correct": "d",
      "correct_answer": "• Modularita a abstrakce\n• Jednoduchost (dělání jedno věci dobře) a úplnost\n• Kompozice\n• Textové, čitelné rozhraní\n• Efektivita implementace",
      "explanation": "Správná možnost odpovídá původní kartičce: • Modularita a abstrakce • Jednoduchost (dělání jedno věci dobře) a úplnost • Kompozice • Textové, čitelné rozhraní • Efektivita implementace Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-03-01",
        "b": "bosys-03-02",
        "c": "bosys-03-04",
        "d": "bosys-03-03"
      },
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-03-04",
      "source_card_id": "bosys-03-04",
      "stable_id": "35c92f9d",
      "section_index": 3,
      "section": "Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů (vyjma útoků na systém, to je jiný okruh).",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Způsoby zabezpečení procesů, dat na médiu a přenášených dat.",
      "options": {
        "a": "• Efektivita\n• Spolehlivost a stabilita\n• Bezpečnost\n• Uživatelská přívětivost\n• Přenositelnost",
        "b": "• Modularita a abstrakce\n• Jednoduchost (dělání jedno věci dobře) a úplnost\n• Kompozice\n• Textové, čitelné rozhraní\n• Efektivita implementace",
        "c": "• Současná práce více procesů\n• Nutnost vysoké spolehlivosti\n• Komplexita interakcí\n• Nutnost podpory různorodého HW\n• Zpětná kompatibilita\n• Přenositelnost\n• Konkurence\n• Životnost\n• Ochrana\n• Sdílení",
        "d": "• Procesy = MMU a ochrana adresního prostoru, úrovně oprávnění\n• Data = přístupová práva, šifrování disku\n• Přenos dat = šifrované protokoly (TLS, SSH), VPN, digitální podpisy"
      },
      "correct": "d",
      "correct_answer": "• Procesy = MMU a ochrana adresního prostoru, úrovně oprávnění\n• Data = přístupová práva, šifrování disku\n• Přenos dat = šifrované protokoly (TLS, SSH), VPN, digitální podpisy",
      "explanation": "Správná možnost odpovídá původní kartičce: • Procesy = MMU a ochrana adresního prostoru, úrovně oprávnění • Data = přístupová práva, šifrování disku • Přenos dat = šifrované protokoly (TLS, SSH), VPN, digitální podpisy Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-03-01",
        "b": "bosys-03-03",
        "c": "bosys-03-02",
        "d": "bosys-03-04"
      },
      "tags": [
        "BOSYS",
        "sekce-03",
        "navrh-os-a-jeho-bezpecnost-duvody-narocnosti-implementace",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-04-01",
      "source_card_id": "bosys-04-01",
      "stable_id": "6141f365",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis fází provádění instrukce.",
      "options": {
        "a": "• Přerušitelnost = schopnost CPU přerušit běh instrukčního proudu (preempce)\n• Průběh zpracování:\n1. Načtení instrukce\n2. Její dekódování\n3. Provedení aritmeticko-logické nebo logické instrukce (sčítání, násobení, bitové operace)\n4. Přístup do datové cache\n5. Zápis výsledku",
        "b": "• umožní efektivní využití CPU při asynchronní obsluze událostí\n• Průběh:\n1. HW vygeneruje Interrupt ReQuest (IRQ) na sběrnici\n2. CPU dokončí aktuální fázi instrukce a uloží stav na stack (zásobník)\n3. Provede skok na adresu obsluhy přerušení v jádře\n4. Jádro OS vyhodnotí typ přerušení a provede obslužnou rutinu\n5. Po obsluze návrat z přerušení, obnova stavu procesu a pokračuje tam, kde se skončilo",
        "c": "• Pipeline = rozdělení zpracování instrukce na několik paralelních “stupňů”\n◦ ve stejnou chvíli může být v různých fázích více instrukcí\n• Další = Spekulativní provádění -> CPU předvídá větvení programu\n◦ Superskalární architektura -> CPU má vícenásobné aritmeticko-logické/floating-point jednotky -> může provádět více instrukcí současně\n◦ Vícejádrové procesory -> v jednom pouzdře jsou 2 či více jader, každé s vlastní pipeline",
        "d": "• 1. Fetch (načtení instrukce z paměti do instrukčního registru)\n• 2. Decode (dekódování, určení operace)\n• 3. Execute (vykonání instrukce)\n• 4. Memory Access (čtení z paměti)\n• 4. WriteBack (uložení výsledku operace do registru nebo paměti)"
      },
      "correct": "d",
      "correct_answer": "• 1. Fetch (načtení instrukce z paměti do instrukčního registru)\n• 2. Decode (dekódování, určení operace)\n• 3. Execute (vykonání instrukce)\n• 4. Memory Access (čtení z paměti)\n• 4. WriteBack (uložení výsledku operace do registru nebo paměti)",
      "explanation": "Správná možnost odpovídá původní kartičce: • 1. Fetch (načtení instrukce z paměti do instrukčního registru) • 2. Decode (dekódování, určení operace) • 3. Execute (vykonání instrukce) • 4. Memory Access (čtení z paměti) • 4. WriteBack (uložení výsledku operace do registru nebo paměti) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-04-03",
        "b": "bosys-04-04",
        "c": "bosys-04-02",
        "d": "bosys-04-01"
      },
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-04-02",
      "source_card_id": "bosys-04-02",
      "stable_id": "50896a4e",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Definice pipeline a další možnosti zvyšování výkonu CPU.",
      "options": {
        "a": "• Přerušitelnost = schopnost CPU přerušit běh instrukčního proudu (preempce)\n• Průběh zpracování:\n1. Načtení instrukce\n2. Její dekódování\n3. Provedení aritmeticko-logické nebo logické instrukce (sčítání, násobení, bitové operace)\n4. Přístup do datové cache\n5. Zápis výsledku",
        "b": "• umožní efektivní využití CPU při asynchronní obsluze událostí\n• Průběh:\n1. HW vygeneruje Interrupt ReQuest (IRQ) na sběrnici\n2. CPU dokončí aktuální fázi instrukce a uloží stav na stack (zásobník)\n3. Provede skok na adresu obsluhy přerušení v jádře\n4. Jádro OS vyhodnotí typ přerušení a provede obslužnou rutinu\n5. Po obsluze návrat z přerušení, obnova stavu procesu a pokračuje tam, kde se skončilo",
        "c": "• 1. Fetch (načtení instrukce z paměti do instrukčního registru)\n• 2. Decode (dekódování, určení operace)\n• 3. Execute (vykonání instrukce)\n• 4. Memory Access (čtení z paměti)\n• 4. WriteBack (uložení výsledku operace do registru nebo paměti)",
        "d": "• Pipeline = rozdělení zpracování instrukce na několik paralelních “stupňů”\n◦ ve stejnou chvíli může být v různých fázích více instrukcí\n• Další = Spekulativní provádění -> CPU předvídá větvení programu\n◦ Superskalární architektura -> CPU má vícenásobné aritmeticko-logické/floating-point jednotky -> může provádět více instrukcí současně\n◦ Vícejádrové procesory -> v jednom pouzdře jsou 2 či více jader, každé s vlastní pipeline"
      },
      "correct": "d",
      "correct_answer": "• Pipeline = rozdělení zpracování instrukce na několik paralelních “stupňů”\n◦ ve stejnou chvíli může být v různých fázích více instrukcí\n• Další = Spekulativní provádění -> CPU předvídá větvení programu\n◦ Superskalární architektura -> CPU má vícenásobné aritmeticko-logické/floating-point jednotky -> může provádět více instrukcí současně\n◦ Vícejádrové procesory -> v jednom pouzdře jsou 2 či více jader, každé s vlastní pipeline",
      "explanation": "Správná možnost odpovídá původní kartičce: • Pipeline = rozdělení zpracování instrukce na několik paralelních “stupňů” ◦ ve stejnou chvíli může být v různých fázích více instrukcí • Další = Spekulativní provádění -> CPU předvídá větvení programu ◦ Superskalární architektura -> CPU má vícenásobné aritmeticko-logické/floating-point jednotky -> může provádět více instrukcí současně ◦ Vícejádrové… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-04-03",
        "b": "bosys-04-04",
        "c": "bosys-04-01",
        "d": "bosys-04-02"
      },
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-04-03",
      "source_card_id": "bosys-04-03",
      "stable_id": "4cea8f62",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Přerušitelnost procesu, průběhu zpracování instrukce.",
      "options": {
        "a": "• umožní efektivní využití CPU při asynchronní obsluze událostí\n• Průběh:\n1. HW vygeneruje Interrupt ReQuest (IRQ) na sběrnici\n2. CPU dokončí aktuální fázi instrukce a uloží stav na stack (zásobník)\n3. Provede skok na adresu obsluhy přerušení v jádře\n4. Jádro OS vyhodnotí typ přerušení a provede obslužnou rutinu\n5. Po obsluze návrat z přerušení, obnova stavu procesu a pokračuje tam, kde se skončilo",
        "b": "• Pipeline = rozdělení zpracování instrukce na několik paralelních “stupňů”\n◦ ve stejnou chvíli může být v různých fázích více instrukcí\n• Další = Spekulativní provádění -> CPU předvídá větvení programu\n◦ Superskalární architektura -> CPU má vícenásobné aritmeticko-logické/floating-point jednotky -> může provádět více instrukcí současně\n◦ Vícejádrové procesory -> v jednom pouzdře jsou 2 či více jader, každé s vlastní pipeline",
        "c": "• Přerušitelnost = schopnost CPU přerušit běh instrukčního proudu (preempce)\n• Průběh zpracování:\n1. Načtení instrukce\n2. Její dekódování\n3. Provedení aritmeticko-logické nebo logické instrukce (sčítání, násobení, bitové operace)\n4. Přístup do datové cache\n5. Zápis výsledku",
        "d": "• 1. Fetch (načtení instrukce z paměti do instrukčního registru)\n• 2. Decode (dekódování, určení operace)\n• 3. Execute (vykonání instrukce)\n• 4. Memory Access (čtení z paměti)\n• 4. WriteBack (uložení výsledku operace do registru nebo paměti)"
      },
      "correct": "c",
      "correct_answer": "• Přerušitelnost = schopnost CPU přerušit běh instrukčního proudu (preempce)\n• Průběh zpracování:\n1. Načtení instrukce\n2. Její dekódování\n3. Provedení aritmeticko-logické nebo logické instrukce (sčítání, násobení, bitové operace)\n4. Přístup do datové cache\n5. Zápis výsledku",
      "explanation": "Správná možnost odpovídá původní kartičce: • Přerušitelnost = schopnost CPU přerušit běh instrukčního proudu (preempce) • Průběh zpracování: 1. Načtení instrukce 2. Její dekódování 3. Provedení aritmeticko-logické nebo logické instrukce (sčítání, násobení, bitové operace) 4. Přístup do datové cache 5. Zápis výsledku Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-04-04",
        "b": "bosys-04-02",
        "c": "bosys-04-03",
        "d": "bosys-04-01"
      },
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-04-04",
      "source_card_id": "bosys-04-04",
      "stable_id": "55f88093",
      "section_index": 4,
      "section": "CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Přerušovací systém: účel, průběh přerušení.",
      "options": {
        "a": "• umožní efektivní využití CPU při asynchronní obsluze událostí\n• Průběh:\n1. HW vygeneruje Interrupt ReQuest (IRQ) na sběrnici\n2. CPU dokončí aktuální fázi instrukce a uloží stav na stack (zásobník)\n3. Provede skok na adresu obsluhy přerušení v jádře\n4. Jádro OS vyhodnotí typ přerušení a provede obslužnou rutinu\n5. Po obsluze návrat z přerušení, obnova stavu procesu a pokračuje tam, kde se skončilo",
        "b": "• 1. Fetch (načtení instrukce z paměti do instrukčního registru)\n• 2. Decode (dekódování, určení operace)\n• 3. Execute (vykonání instrukce)\n• 4. Memory Access (čtení z paměti)\n• 4. WriteBack (uložení výsledku operace do registru nebo paměti)",
        "c": "• Přerušitelnost = schopnost CPU přerušit běh instrukčního proudu (preempce)\n• Průběh zpracování:\n1. Načtení instrukce\n2. Její dekódování\n3. Provedení aritmeticko-logické nebo logické instrukce (sčítání, násobení, bitové operace)\n4. Přístup do datové cache\n5. Zápis výsledku",
        "d": "• Pipeline = rozdělení zpracování instrukce na několik paralelních “stupňů”\n◦ ve stejnou chvíli může být v různých fázích více instrukcí\n• Další = Spekulativní provádění -> CPU předvídá větvení programu\n◦ Superskalární architektura -> CPU má vícenásobné aritmeticko-logické/floating-point jednotky -> může provádět více instrukcí současně\n◦ Vícejádrové procesory -> v jednom pouzdře jsou 2 či více jader, každé s vlastní pipeline"
      },
      "correct": "a",
      "correct_answer": "• umožní efektivní využití CPU při asynchronní obsluze událostí\n• Průběh:\n1. HW vygeneruje Interrupt ReQuest (IRQ) na sběrnici\n2. CPU dokončí aktuální fázi instrukce a uloží stav na stack (zásobník)\n3. Provede skok na adresu obsluhy přerušení v jádře\n4. Jádro OS vyhodnotí typ přerušení a provede obslužnou rutinu\n5. Po obsluze návrat z přerušení, obnova stavu procesu a pokračuje tam, kde se skončilo",
      "explanation": "Správná možnost odpovídá původní kartičce: • umožní efektivní využití CPU při asynchronní obsluze událostí • Průběh: 1. HW vygeneruje Interrupt ReQuest (IRQ) na sběrnici 2. CPU dokončí aktuální fázi instrukce a uloží stav na stack (zásobník) 3. Provede skok na adresu obsluhy přerušení v jádře 4. Jádro OS vyhodnotí typ přerušení a provede obslužnou rutinu 5. Po obsluze návrat z přerušení, obnova… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-04-04",
        "b": "bosys-04-01",
        "c": "bosys-04-03",
        "d": "bosys-04-02"
      },
      "tags": [
        "BOSYS",
        "sekce-04",
        "cpu-provadeni-instrukce-pipeline-atomicita-a-prerusitelnost-procesu",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-05-01",
      "source_card_id": "bosys-05-01",
      "stable_id": "5a12ce1b",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis metod komunikace se vstupně‑výstupním zařízením:",
      "options": {
        "a": "Metody komunikace s I/O zařízením:\n• Programovaný I/O s aktivním čekáním: CPU opakovaně kontroluje stav zařízení, proto je neefektivní.\n• I/O s přerušením: CPU zadá operaci a může dělat jinou práci; zařízení po dokončení vyvolá přerušení.\n• DMA: CPU nastaví adresu, velikost a příkaz, přenos bloku mezi zařízením a pamětí provede DMA řadič a CPU je informováno přerušením.",
        "b": "• Přímý přístup do paměti -> DMA (Direct Memory Access)\n1. Zápis adresy dat, množství dat a příkazů do registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu daného množství dat vyvolán přerušovací signál, přeruší operace\nkroku 2, dokončí se přenos -> přenáší se celý blok dat bez účasti CPU",
        "c": "• Přístup pomocí instrukcí CPU s přerušovacím signálem\n1. Zápis/čtení z registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1",
        "d": "• Přístup pouze pomocí instrukcí CPU:\n1. Zápis/čtení z registru V-V zařízení\n2. Kontrola stavu zápisu/čtení (neproduktivní čekání)\n3. Pokračujeme krokem 1"
      },
      "correct": "a",
      "correct_answer": "Metody komunikace s I/O zařízením:\n• Programovaný I/O s aktivním čekáním: CPU opakovaně kontroluje stav zařízení, proto je neefektivní.\n• I/O s přerušením: CPU zadá operaci a může dělat jinou práci; zařízení po dokončení vyvolá přerušení.\n• DMA: CPU nastaví adresu, velikost a příkaz, přenos bloku mezi zařízením a pamětí provede DMA řadič a CPU je informováno přerušením.",
      "explanation": "Správná možnost odpovídá původní kartičce: Metody komunikace s I/O zařízením: • Programovaný I/O s aktivním čekáním: CPU opakovaně kontroluje stav zařízení, proto je neefektivní. • I/O s přerušením: CPU zadá operaci a může dělat jinou práci; zařízení po dokončení vyvolá přerušení. • DMA: CPU nastaví adresu, velikost a příkaz, přenos bloku mezi zařízením a pamětí provede DMA řadič a CPU je… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-01",
        "b": "bosys-05-04",
        "c": "bosys-05-03",
        "d": "bosys-05-02"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": null
    },
    {
      "id": "bosys-abcd-05-02",
      "source_card_id": "bosys-05-02",
      "stable_id": "4725943b",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Metoda 1 (neefektivní).",
      "options": {
        "a": "• malá, rychlá mezipaměť mezi CPU a hlavní pamětí\n• uchovává často používaná data či instrukce",
        "b": "Metody komunikace s I/O zařízením:\n• Programovaný I/O s aktivním čekáním: CPU opakovaně kontroluje stav zařízení, proto je neefektivní.\n• I/O s přerušením: CPU zadá operaci a může dělat jinou práci; zařízení po dokončení vyvolá přerušení.\n• DMA: CPU nastaví adresu, velikost a příkaz, přenos bloku mezi zařízením a pamětí provede DMA řadič a CPU je informováno přerušením.",
        "c": "◦ Taverage = Tcache + (1-H) * Tmemory\n• H = hit ratio (pravděpodobnost zásahu v cache)\n• Tcache = čas přístupu do cache\n• Tmemory = čas přístupu do hlavní paměti",
        "d": "• Přístup pouze pomocí instrukcí CPU:\n1. Zápis/čtení z registru V-V zařízení\n2. Kontrola stavu zápisu/čtení (neproduktivní čekání)\n3. Pokračujeme krokem 1"
      },
      "correct": "d",
      "correct_answer": "• Přístup pouze pomocí instrukcí CPU:\n1. Zápis/čtení z registru V-V zařízení\n2. Kontrola stavu zápisu/čtení (neproduktivní čekání)\n3. Pokračujeme krokem 1",
      "explanation": "Správná možnost odpovídá původní kartičce: • Přístup pouze pomocí instrukcí CPU: 1. Zápis/čtení z registru V-V zařízení 2. Kontrola stavu zápisu/čtení (neproduktivní čekání) 3. Pokračujeme krokem 1 Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-05",
        "b": "bosys-05-01",
        "c": "bosys-05-08",
        "d": "bosys-05-02"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-05-03",
      "source_card_id": "bosys-05-03",
      "stable_id": "9ba6e71e",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Metoda 2 (efektivnější).",
      "options": {
        "a": "• Přístup pomocí instrukcí CPU s přerušovacím signálem\n1. Zápis/čtení z registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1",
        "b": "• malá, rychlá mezipaměť mezi CPU a hlavní pamětí\n• uchovává často používaná data či instrukce",
        "c": "◦ Taverage = Tcache + (1-H) * Tmemory\n• H = hit ratio (pravděpodobnost zásahu v cache)\n• Tcache = čas přístupu do cache\n• Tmemory = čas přístupu do hlavní paměti",
        "d": "• Přístup pouze pomocí instrukcí CPU:\n1. Zápis/čtení z registru V-V zařízení\n2. Kontrola stavu zápisu/čtení (neproduktivní čekání)\n3. Pokračujeme krokem 1"
      },
      "correct": "a",
      "correct_answer": "• Přístup pomocí instrukcí CPU s přerušovacím signálem\n1. Zápis/čtení z registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1",
      "explanation": "Správná možnost odpovídá původní kartičce: • Přístup pomocí instrukcí CPU s přerušovacím signálem 1. Zápis/čtení z registru V-V zařízení 2. Provádění jiných operací – produktivní využití CPU 3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1 Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-03",
        "b": "bosys-05-05",
        "c": "bosys-05-08",
        "d": "bosys-05-02"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-05-04",
      "source_card_id": "bosys-05-04",
      "stable_id": "e25597fd",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Metoda 3 (nejefektivnější).",
      "options": {
        "a": "• Přístup pouze pomocí instrukcí CPU:\n1. Zápis/čtení z registru V-V zařízení\n2. Kontrola stavu zápisu/čtení (neproduktivní čekání)\n3. Pokračujeme krokem 1",
        "b": "• Přístup pomocí instrukcí CPU s přerušovacím signálem\n1. Zápis/čtení z registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1",
        "c": "• procesor je mnohonásobě rychlejší než RAM, cache zmírňuje toto “úzké hrdlo” tím, že\nsnižuje latenci přístupů",
        "d": "• Přímý přístup do paměti -> DMA (Direct Memory Access)\n1. Zápis adresy dat, množství dat a příkazů do registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu daného množství dat vyvolán přerušovací signál, přeruší operace\nkroku 2, dokončí se přenos -> přenáší se celý blok dat bez účasti CPU"
      },
      "correct": "d",
      "correct_answer": "• Přímý přístup do paměti -> DMA (Direct Memory Access)\n1. Zápis adresy dat, množství dat a příkazů do registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu daného množství dat vyvolán přerušovací signál, přeruší operace\nkroku 2, dokončí se přenos -> přenáší se celý blok dat bez účasti CPU",
      "explanation": "Správná možnost odpovídá původní kartičce: • Přímý přístup do paměti -> DMA (Direct Memory Access) 1. Zápis adresy dat, množství dat a příkazů do registru V-V zařízení 2. Provádění jiných operací – produktivní využití CPU 3. Po dokončení přenosu daného množství dat vyvolán přerušovací signál, přeruší operace kroku 2, dokončí se přenos -> přenáší se celý blok dat bez účasti CPU Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-02",
        "b": "bosys-05-03",
        "c": "bosys-05-06",
        "d": "bosys-05-04"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-05-05",
      "source_card_id": "bosys-05-05",
      "stable_id": "c3670859",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Definice paměti cache.",
      "options": {
        "a": "• procesor je mnohonásobě rychlejší než RAM, cache zmírňuje toto “úzké hrdlo” tím, že\nsnižuje latenci přístupů",
        "b": "• malá, rychlá mezipaměť mezi CPU a hlavní pamětí\n• uchovává často používaná data či instrukce",
        "c": "• Přístup pomocí instrukcí CPU s přerušovacím signálem\n1. Zápis/čtení z registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1",
        "d": "• díky lokalitě odkazů (prostorové i časové) má cache vysoký hit ratio -> proces často\npřistupuje ke stejným adresám čí sousedním oblastem"
      },
      "correct": "b",
      "correct_answer": "• malá, rychlá mezipaměť mezi CPU a hlavní pamětí\n• uchovává často používaná data či instrukce",
      "explanation": "Správná možnost odpovídá původní kartičce: • malá, rychlá mezipaměť mezi CPU a hlavní pamětí • uchovává často používaná data či instrukce Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-06",
        "b": "bosys-05-05",
        "c": "bosys-05-03",
        "d": "bosys-05-07"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-05-06",
      "source_card_id": "bosys-05-06",
      "stable_id": "9962c024",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Důvod existence konceptu paměti cache.",
      "options": {
        "a": "• Přímý přístup do paměti -> DMA (Direct Memory Access)\n1. Zápis adresy dat, množství dat a příkazů do registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu daného množství dat vyvolán přerušovací signál, přeruší operace\nkroku 2, dokončí se přenos -> přenáší se celý blok dat bez účasti CPU",
        "b": "• procesor je mnohonásobě rychlejší než RAM, cache zmírňuje toto “úzké hrdlo” tím, že\nsnižuje latenci přístupů",
        "c": "◦ Taverage = Tcache + (1-H) * Tmemory\n• H = hit ratio (pravděpodobnost zásahu v cache)\n• Tcache = čas přístupu do cache\n• Tmemory = čas přístupu do hlavní paměti",
        "d": "• díky lokalitě odkazů (prostorové i časové) má cache vysoký hit ratio -> proces často\npřistupuje ke stejným adresám čí sousedním oblastem"
      },
      "correct": "b",
      "correct_answer": "• procesor je mnohonásobě rychlejší než RAM, cache zmírňuje toto “úzké hrdlo” tím, že\nsnižuje latenci přístupů",
      "explanation": "Správná možnost odpovídá původní kartičce: • procesor je mnohonásobě rychlejší než RAM, cache zmírňuje toto “úzké hrdlo” tím, že snižuje latenci přístupů Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-04",
        "b": "bosys-05-06",
        "c": "bosys-05-08",
        "d": "bosys-05-07"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-05-07",
      "source_card_id": "bosys-05-07",
      "stable_id": "aaff0e56",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 7,
      "type": "single_choice_abcd",
      "question": "Důvod efektivity cache i při její relativně malé velikosti.",
      "options": {
        "a": "• Přístup pomocí instrukcí CPU s přerušovacím signálem\n1. Zápis/čtení z registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu vyvolá V-V přerušení, přeruší se operace kroku 2 -> lze tedy pokračovat krokem 1",
        "b": "• malá, rychlá mezipaměť mezi CPU a hlavní pamětí\n• uchovává často používaná data či instrukce",
        "c": "• Přístup pouze pomocí instrukcí CPU:\n1. Zápis/čtení z registru V-V zařízení\n2. Kontrola stavu zápisu/čtení (neproduktivní čekání)\n3. Pokračujeme krokem 1",
        "d": "• díky lokalitě odkazů (prostorové i časové) má cache vysoký hit ratio -> proces často\npřistupuje ke stejným adresám čí sousedním oblastem"
      },
      "correct": "d",
      "correct_answer": "• díky lokalitě odkazů (prostorové i časové) má cache vysoký hit ratio -> proces často\npřistupuje ke stejným adresám čí sousedním oblastem",
      "explanation": "Správná možnost odpovídá původní kartičce: • díky lokalitě odkazů (prostorové i časové) má cache vysoký hit ratio -> proces často přistupuje ke stejným adresám čí sousedním oblastem Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-03",
        "b": "bosys-05-05",
        "c": "bosys-05-02",
        "d": "bosys-05-07"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-05-08",
      "source_card_id": "bosys-05-08",
      "stable_id": "e0f9c573",
      "section_index": 5,
      "section": "Vstupně‑výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti.",
      "question_index": 8,
      "type": "single_choice_abcd",
      "question": "Výpočet střední přístupové doby do paměti.",
      "options": {
        "a": "• malá, rychlá mezipaměť mezi CPU a hlavní pamětí\n• uchovává často používaná data či instrukce",
        "b": "• Přímý přístup do paměti -> DMA (Direct Memory Access)\n1. Zápis adresy dat, množství dat a příkazů do registru V-V zařízení\n2. Provádění jiných operací – produktivní využití CPU\n3. Po dokončení přenosu daného množství dat vyvolán přerušovací signál, přeruší operace\nkroku 2, dokončí se přenos -> přenáší se celý blok dat bez účasti CPU",
        "c": "◦ Taverage = Tcache + (1-H) * Tmemory\n• H = hit ratio (pravděpodobnost zásahu v cache)\n• Tcache = čas přístupu do cache\n• Tmemory = čas přístupu do hlavní paměti",
        "d": "• procesor je mnohonásobě rychlejší než RAM, cache zmírňuje toto “úzké hrdlo” tím, že\nsnižuje latenci přístupů"
      },
      "correct": "c",
      "correct_answer": "◦ Taverage = Tcache + (1-H) * Tmemory\n• H = hit ratio (pravděpodobnost zásahu v cache)\n• Tcache = čas přístupu do cache\n• Tmemory = čas přístupu do hlavní paměti",
      "explanation": "Správná možnost odpovídá původní kartičce: ◦ Taverage = Tcache + (1-H) * Tmemory • H = hit ratio (pravděpodobnost zásahu v cache) • Tcache = čas přístupu do cache • Tmemory = čas přístupu do hlavní paměti Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-05-05",
        "b": "bosys-05-04",
        "c": "bosys-05-08",
        "d": "bosys-05-06"
      },
      "tags": [
        "BOSYS",
        "sekce-05",
        "vstupne-vystupni-zarizeni-ovladace-a-techniky-programovani-vstupu",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-06-01",
      "source_card_id": "bosys-06-01",
      "stable_id": "403d6570",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Nutné vlastnosti CPU a paměti pro implementaci OS a jejich účel.",
      "options": {
        "a": "• Registry:\n◦ malé (jednoslovné), velmi rychlé paměti uvnitř CPU\n◦ dočasně drží data a řídící informace\n• Druhy:\n◦ Program counter = obsahuje adresu následující instrukce\n◦ Instruction register = interní registr obsahující právě prováděnou instrukci\n◦ Stack pointer = obsahuje adresu vrcholu zásobníku\n◦ Stavový registr = obsahuje příznaky, které informují o výsledku předchozí instrukce\n◦ Další: obecné (libovolné použití), bázové (obsahuji počáteční adresy), ofsetové (obsahují\nRelativní adresy), privátní (používá je interně CPU)",
        "b": "• Přerušovací systém = umožní efektivní využití CPU při asynchronních přenosech dat\n(např. DMA)\n• Programovatelný časovač = pravidelně generuje přerušení, které umožňuje preempci\n• CPU s úrovněmi oprávnění= alespoň 2 režimy (kernel/user) -> umožní ošetřit neoprávněné\npřístupy a operace\n• CPU s podporou ochrany a virtualizace paměti = umožní využít sekundární paměť pro\nodložení nepotřebných procesů",
        "c": "• Program Status Word, případně flags\n• obsahuje příznaky, které informují o výsledku předchozí instrukce\n• Z-Zero Flag = výsledek operace byla nula\n• C-Carry Flag = přenos bitů při sčítání\n• N-Negativ Flag = výsledek byl záporný\n• V-Overflow Flag = přetečení (výsledek se nevejde do registru)",
        "d": "• Programovatelný časovač = generuje periodická přerušení pro plánovač\n• Řadič přerušení (PIC/APIC) = zpracovává požadavky na přerušení z více různých zdrojů a\nprioritizuje IRQ linky\n• Řadič I/O zařízení = komunikace mezi operační pamětí, CPU a konkrétním zařízením\n• DMA řadič = přímý přístup zařízení do paměti bez CPU\n• Sběrnice (Bus) = propojení různých částí PC mezi sebou, které umožňuje komunikaci a\npřesun dat"
      },
      "correct": "b",
      "correct_answer": "• Přerušovací systém = umožní efektivní využití CPU při asynchronních přenosech dat\n(např. DMA)\n• Programovatelný časovač = pravidelně generuje přerušení, které umožňuje preempci\n• CPU s úrovněmi oprávnění= alespoň 2 režimy (kernel/user) -> umožní ošetřit neoprávněné\npřístupy a operace\n• CPU s podporou ochrany a virtualizace paměti = umožní využít sekundární paměť pro\nodložení nepotřebných procesů",
      "explanation": "Správná možnost odpovídá původní kartičce: • Přerušovací systém = umožní efektivní využití CPU při asynchronních přenosech dat (např. DMA) • Programovatelný časovač = pravidelně generuje přerušení, které umožňuje preempci • CPU s úrovněmi oprávnění= alespoň 2 režimy (kernel/user) -> umožní ošetřit neoprávněné přístupy a operace • CPU s podporou ochrany a virtualizace paměti = umožní využít… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-06-03",
        "b": "bosys-06-01",
        "c": "bosys-06-04",
        "d": "bosys-06-02"
      },
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci",
        "abcd-test"
      ],
      "points_hint": "2 + 3"
    },
    {
      "id": "bosys-abcd-06-02",
      "source_card_id": "bosys-06-02",
      "stable_id": "e3a057e6",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Nutné subsystémy HW pro implementaci OS (kromě CPU a paměti) a jejich účel.",
      "options": {
        "a": "• Programovatelný časovač = generuje periodická přerušení pro plánovač\n• Řadič přerušení (PIC/APIC) = zpracovává požadavky na přerušení z více různých zdrojů a\nprioritizuje IRQ linky\n• Řadič I/O zařízení = komunikace mezi operační pamětí, CPU a konkrétním zařízením\n• DMA řadič = přímý přístup zařízení do paměti bez CPU\n• Sběrnice (Bus) = propojení různých částí PC mezi sebou, které umožňuje komunikaci a\npřesun dat",
        "b": "• Program Status Word, případně flags\n• obsahuje příznaky, které informují o výsledku předchozí instrukce\n• Z-Zero Flag = výsledek operace byla nula\n• C-Carry Flag = přenos bitů při sčítání\n• N-Negativ Flag = výsledek byl záporný\n• V-Overflow Flag = přetečení (výsledek se nevejde do registru)",
        "c": "• Přerušovací systém = umožní efektivní využití CPU při asynchronních přenosech dat\n(např. DMA)\n• Programovatelný časovač = pravidelně generuje přerušení, které umožňuje preempci\n• CPU s úrovněmi oprávnění= alespoň 2 režimy (kernel/user) -> umožní ošetřit neoprávněné\npřístupy a operace\n• CPU s podporou ochrany a virtualizace paměti = umožní využít sekundární paměť pro\nodložení nepotřebných procesů",
        "d": "• Registry:\n◦ malé (jednoslovné), velmi rychlé paměti uvnitř CPU\n◦ dočasně drží data a řídící informace\n• Druhy:\n◦ Program counter = obsahuje adresu následující instrukce\n◦ Instruction register = interní registr obsahující právě prováděnou instrukci\n◦ Stack pointer = obsahuje adresu vrcholu zásobníku\n◦ Stavový registr = obsahuje příznaky, které informují o výsledku předchozí instrukce\n◦ Další: obecné (libovolné použití), bázové (obsahuji počáteční adresy), ofsetové (obsahují\nRelativní adresy), privátní (používá je interně CPU)"
      },
      "correct": "a",
      "correct_answer": "• Programovatelný časovač = generuje periodická přerušení pro plánovač\n• Řadič přerušení (PIC/APIC) = zpracovává požadavky na přerušení z více různých zdrojů a\nprioritizuje IRQ linky\n• Řadič I/O zařízení = komunikace mezi operační pamětí, CPU a konkrétním zařízením\n• DMA řadič = přímý přístup zařízení do paměti bez CPU\n• Sběrnice (Bus) = propojení různých částí PC mezi sebou, které umožňuje komunikaci a\npřesun dat",
      "explanation": "Správná možnost odpovídá původní kartičce: • Programovatelný časovač = generuje periodická přerušení pro plánovač • Řadič přerušení (PIC/APIC) = zpracovává požadavky na přerušení z více různých zdrojů a prioritizuje IRQ linky • Řadič I/O zařízení = komunikace mezi operační pamětí, CPU a konkrétním zařízením • DMA řadič = přímý přístup zařízení do paměti bez CPU • Sběrnice (Bus) = propojení různých… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-06-02",
        "b": "bosys-06-04",
        "c": "bosys-06-01",
        "d": "bosys-06-03"
      },
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci",
        "abcd-test"
      ],
      "points_hint": "2 + 2"
    },
    {
      "id": "bosys-abcd-06-03",
      "source_card_id": "bosys-06-03",
      "stable_id": "05e853c8",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Definice registrů CPU, jejich druhy.",
      "options": {
        "a": "• Registry:\n◦ malé (jednoslovné), velmi rychlé paměti uvnitř CPU\n◦ dočasně drží data a řídící informace\n• Druhy:\n◦ Program counter = obsahuje adresu následující instrukce\n◦ Instruction register = interní registr obsahující právě prováděnou instrukci\n◦ Stack pointer = obsahuje adresu vrcholu zásobníku\n◦ Stavový registr = obsahuje příznaky, které informují o výsledku předchozí instrukce\n◦ Další: obecné (libovolné použití), bázové (obsahuji počáteční adresy), ofsetové (obsahují\nRelativní adresy), privátní (používá je interně CPU)",
        "b": "• Programovatelný časovač = generuje periodická přerušení pro plánovač\n• Řadič přerušení (PIC/APIC) = zpracovává požadavky na přerušení z více různých zdrojů a\nprioritizuje IRQ linky\n• Řadič I/O zařízení = komunikace mezi operační pamětí, CPU a konkrétním zařízením\n• DMA řadič = přímý přístup zařízení do paměti bez CPU\n• Sběrnice (Bus) = propojení různých částí PC mezi sebou, které umožňuje komunikaci a\npřesun dat",
        "c": "• Program Status Word, případně flags\n• obsahuje příznaky, které informují o výsledku předchozí instrukce\n• Z-Zero Flag = výsledek operace byla nula\n• C-Carry Flag = přenos bitů při sčítání\n• N-Negativ Flag = výsledek byl záporný\n• V-Overflow Flag = přetečení (výsledek se nevejde do registru)",
        "d": "• Přerušovací systém = umožní efektivní využití CPU při asynchronních přenosech dat\n(např. DMA)\n• Programovatelný časovač = pravidelně generuje přerušení, které umožňuje preempci\n• CPU s úrovněmi oprávnění= alespoň 2 režimy (kernel/user) -> umožní ošetřit neoprávněné\npřístupy a operace\n• CPU s podporou ochrany a virtualizace paměti = umožní využít sekundární paměť pro\nodložení nepotřebných procesů"
      },
      "correct": "a",
      "correct_answer": "• Registry:\n◦ malé (jednoslovné), velmi rychlé paměti uvnitř CPU\n◦ dočasně drží data a řídící informace\n• Druhy:\n◦ Program counter = obsahuje adresu následující instrukce\n◦ Instruction register = interní registr obsahující právě prováděnou instrukci\n◦ Stack pointer = obsahuje adresu vrcholu zásobníku\n◦ Stavový registr = obsahuje příznaky, které informují o výsledku předchozí instrukce\n◦ Další: obecné (libovolné použití), bázové (obsahuji počáteční adresy), ofsetové (obsahují\nRelativní adresy), privátní (používá je interně CPU)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Registry: ◦ malé (jednoslovné), velmi rychlé paměti uvnitř CPU ◦ dočasně drží data a řídící informace • Druhy: ◦ Program counter = obsahuje adresu následující instrukce ◦ Instruction register = interní registr obsahující právě prováděnou instrukci ◦ Stack pointer = obsahuje adresu vrcholu zásobníku ◦ Stavový registr = obsahuje příznaky, které informují o… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-06-03",
        "b": "bosys-06-02",
        "c": "bosys-06-04",
        "d": "bosys-06-01"
      },
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci",
        "abcd-test"
      ],
      "points_hint": "1 + 2"
    },
    {
      "id": "bosys-abcd-06-04",
      "source_card_id": "bosys-06-04",
      "stable_id": "88bae3cc",
      "section_index": 6,
      "section": "Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Stavový registr CPU a zahrnuté příznaky (alespoň tři).",
      "options": {
        "a": "• Přerušovací systém = umožní efektivní využití CPU při asynchronních přenosech dat\n(např. DMA)\n• Programovatelný časovač = pravidelně generuje přerušení, které umožňuje preempci\n• CPU s úrovněmi oprávnění= alespoň 2 režimy (kernel/user) -> umožní ošetřit neoprávněné\npřístupy a operace\n• CPU s podporou ochrany a virtualizace paměti = umožní využít sekundární paměť pro\nodložení nepotřebných procesů",
        "b": "• Registry:\n◦ malé (jednoslovné), velmi rychlé paměti uvnitř CPU\n◦ dočasně drží data a řídící informace\n• Druhy:\n◦ Program counter = obsahuje adresu následující instrukce\n◦ Instruction register = interní registr obsahující právě prováděnou instrukci\n◦ Stack pointer = obsahuje adresu vrcholu zásobníku\n◦ Stavový registr = obsahuje příznaky, které informují o výsledku předchozí instrukce\n◦ Další: obecné (libovolné použití), bázové (obsahuji počáteční adresy), ofsetové (obsahují\nRelativní adresy), privátní (používá je interně CPU)",
        "c": "• Program Status Word, případně flags\n• obsahuje příznaky, které informují o výsledku předchozí instrukce\n• Z-Zero Flag = výsledek operace byla nula\n• C-Carry Flag = přenos bitů při sčítání\n• N-Negativ Flag = výsledek byl záporný\n• V-Overflow Flag = přetečení (výsledek se nevejde do registru)",
        "d": "• Programovatelný časovač = generuje periodická přerušení pro plánovač\n• Řadič přerušení (PIC/APIC) = zpracovává požadavky na přerušení z více různých zdrojů a\nprioritizuje IRQ linky\n• Řadič I/O zařízení = komunikace mezi operační pamětí, CPU a konkrétním zařízením\n• DMA řadič = přímý přístup zařízení do paměti bez CPU\n• Sběrnice (Bus) = propojení různých částí PC mezi sebou, které umožňuje komunikaci a\npřesun dat"
      },
      "correct": "c",
      "correct_answer": "• Program Status Word, případně flags\n• obsahuje příznaky, které informují o výsledku předchozí instrukce\n• Z-Zero Flag = výsledek operace byla nula\n• C-Carry Flag = přenos bitů při sčítání\n• N-Negativ Flag = výsledek byl záporný\n• V-Overflow Flag = přetečení (výsledek se nevejde do registru)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Program Status Word, případně flags • obsahuje příznaky, které informují o výsledku předchozí instrukce • Z-Zero Flag = výsledek operace byla nula • C-Carry Flag = přenos bitů při sčítání • N-Negativ Flag = výsledek byl záporný • V-Overflow Flag = přetečení (výsledek se nevejde do registru) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-06-01",
        "b": "bosys-06-03",
        "c": "bosys-06-04",
        "d": "bosys-06-02"
      },
      "tags": [
        "BOSYS",
        "sekce-06",
        "pozadavky-os-na-hw-nutny-pro-jeho-implementaci",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-07-01",
      "source_card_id": "bosys-07-01",
      "stable_id": "df01abe3",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Proces a program: definice.",
      "options": {
        "a": "• Ready -> Running = plánovač přiřadí CPU novému procesu\n• Running -> Waiting = volání I/O, čekání na událost\n• Running -> Ready = vypršel časový kvantum\n• Waiting -> Ready = událost nastala -> Dokončení I/O",
        "b": "• 1. Uložení kontextu běžícího procesu do PCB (Process Control Block)\n• 2. Výběr nového procesu plánovačem ke spuštění z fronty “ready”\n• 3. Načtení kontextu nového procesu do registru CPU\n• 4. Přepnutí do uživatelského režimu a pokračování ve vykonávání",
        "c": "• Identifikátor procesu (PID)\n• Stav procesu (ready, running, blocked...)\n• Kontext CPU (registry, PC, PSW)\n• Údaje plánovače\n• Informace o otevřených souborech\n• Časové razítko\n• Vlastník a práva\n• Adresový prostor (text, data, heap, stack, mapování paměti)",
        "d": "• Proces = aktivní/dynamická instance programu vložená do operační paměti s vlastním\nkontextem běhu (příprava pokrmu dle receptu)\n• Program = pasivní/statický soubor instrukcí, dat a kódu (recept)"
      },
      "correct": "d",
      "correct_answer": "• Proces = aktivní/dynamická instance programu vložená do operační paměti s vlastním\nkontextem běhu (příprava pokrmu dle receptu)\n• Program = pasivní/statický soubor instrukcí, dat a kódu (recept)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Proces = aktivní/dynamická instance programu vložená do operační paměti s vlastním kontextem běhu (příprava pokrmu dle receptu) • Program = pasivní/statický soubor instrukcí, dat a kódu (recept) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-07-05",
        "b": "bosys-07-03",
        "c": "bosys-07-02",
        "d": "bosys-07-01"
      },
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-07-02",
      "source_card_id": "bosys-07-02",
      "stable_id": "011799af",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Metadata procesu (alespoň šest).",
      "options": {
        "a": "• Identifikátor procesu (PID)\n• Stav procesu (ready, running, blocked...)\n• Kontext CPU (registry, PC, PSW)\n• Údaje plánovače\n• Informace o otevřených souborech\n• Časové razítko\n• Vlastník a práva\n• Adresový prostor (text, data, heap, stack, mapování paměti)",
        "b": "• Ready = proces je připraven k běhu, čeká na přidělení CPU\n• Running = proces právě využívá CPU (běží)\n• Waiting (Blocked) = proces čeká na vnější událost (I/O)",
        "c": "• 1. Uložení kontextu běžícího procesu do PCB (Process Control Block)\n• 2. Výběr nového procesu plánovačem ke spuštění z fronty “ready”\n• 3. Načtení kontextu nového procesu do registru CPU\n• 4. Přepnutí do uživatelského režimu a pokračování ve vykonávání",
        "d": "• Proces = aktivní/dynamická instance programu vložená do operační paměti s vlastním\nkontextem běhu (příprava pokrmu dle receptu)\n• Program = pasivní/statický soubor instrukcí, dat a kódu (recept)"
      },
      "correct": "a",
      "correct_answer": "• Identifikátor procesu (PID)\n• Stav procesu (ready, running, blocked...)\n• Kontext CPU (registry, PC, PSW)\n• Údaje plánovače\n• Informace o otevřených souborech\n• Časové razítko\n• Vlastník a práva\n• Adresový prostor (text, data, heap, stack, mapování paměti)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Identifikátor procesu (PID) • Stav procesu (ready, running, blocked...) • Kontext CPU (registry, PC, PSW) • Údaje plánovače • Informace o otevřených souborech • Časové razítko • Vlastník a práva • Adresový prostor (text, data, heap, stack, mapování paměti) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-07-02",
        "b": "bosys-07-04",
        "c": "bosys-07-03",
        "d": "bosys-07-01"
      },
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-07-03",
      "source_card_id": "bosys-07-03",
      "stable_id": "b9b77ead",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Průběh přepnutí kontextu.",
      "options": {
        "a": "• Ready -> Running = plánovač přiřadí CPU novému procesu\n• Running -> Waiting = volání I/O, čekání na událost\n• Running -> Ready = vypršel časový kvantum\n• Waiting -> Ready = událost nastala -> Dokončení I/O",
        "b": "• 1. Uložení kontextu běžícího procesu do PCB (Process Control Block)\n• 2. Výběr nového procesu plánovačem ke spuštění z fronty “ready”\n• 3. Načtení kontextu nového procesu do registru CPU\n• 4. Přepnutí do uživatelského režimu a pokračování ve vykonávání",
        "c": "• Identifikátor procesu (PID)\n• Stav procesu (ready, running, blocked...)\n• Kontext CPU (registry, PC, PSW)\n• Údaje plánovače\n• Informace o otevřených souborech\n• Časové razítko\n• Vlastník a práva\n• Adresový prostor (text, data, heap, stack, mapování paměti)",
        "d": "• Ready = proces je připraven k běhu, čeká na přidělení CPU\n• Running = proces právě využívá CPU (běží)\n• Waiting (Blocked) = proces čeká na vnější událost (I/O)"
      },
      "correct": "b",
      "correct_answer": "• 1. Uložení kontextu běžícího procesu do PCB (Process Control Block)\n• 2. Výběr nového procesu plánovačem ke spuštění z fronty “ready”\n• 3. Načtení kontextu nového procesu do registru CPU\n• 4. Přepnutí do uživatelského režimu a pokračování ve vykonávání",
      "explanation": "Správná možnost odpovídá původní kartičce: • 1. Uložení kontextu běžícího procesu do PCB (Process Control Block) • 2. Výběr nového procesu plánovačem ke spuštění z fronty “ready” • 3. Načtení kontextu nového procesu do registru CPU • 4. Přepnutí do uživatelského režimu a pokračování ve vykonávání Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-07-05",
        "b": "bosys-07-03",
        "c": "bosys-07-02",
        "d": "bosys-07-04"
      },
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-07-04",
      "source_card_id": "bosys-07-04",
      "stable_id": "41ecfc18",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Třístavový model: popis stavů.",
      "options": {
        "a": "• Ready = proces je připraven k běhu, čeká na přidělení CPU\n• Running = proces právě využívá CPU (běží)\n• Waiting (Blocked) = proces čeká na vnější událost (I/O)",
        "b": "• Ready -> Running = plánovač přiřadí CPU novému procesu\n• Running -> Waiting = volání I/O, čekání na událost\n• Running -> Ready = vypršel časový kvantum\n• Waiting -> Ready = událost nastala -> Dokončení I/O",
        "c": "• Identifikátor procesu (PID)\n• Stav procesu (ready, running, blocked...)\n• Kontext CPU (registry, PC, PSW)\n• Údaje plánovače\n• Informace o otevřených souborech\n• Časové razítko\n• Vlastník a práva\n• Adresový prostor (text, data, heap, stack, mapování paměti)",
        "d": "• 1. Uložení kontextu běžícího procesu do PCB (Process Control Block)\n• 2. Výběr nového procesu plánovačem ke spuštění z fronty “ready”\n• 3. Načtení kontextu nového procesu do registru CPU\n• 4. Přepnutí do uživatelského režimu a pokračování ve vykonávání"
      },
      "correct": "a",
      "correct_answer": "• Ready = proces je připraven k běhu, čeká na přidělení CPU\n• Running = proces právě využívá CPU (běží)\n• Waiting (Blocked) = proces čeká na vnější událost (I/O)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Ready = proces je připraven k běhu, čeká na přidělení CPU • Running = proces právě využívá CPU (běží) • Waiting (Blocked) = proces čeká na vnější událost (I/O) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-07-04",
        "b": "bosys-07-05",
        "c": "bosys-07-02",
        "d": "bosys-07-03"
      },
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-07-05",
      "source_card_id": "bosys-07-05",
      "stable_id": "3b7fa11a",
      "section_index": 7,
      "section": "Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Třístavový model: příčiny přechodů mezi stavy.",
      "options": {
        "a": "• Ready = proces je připraven k běhu, čeká na přidělení CPU\n• Running = proces právě využívá CPU (běží)\n• Waiting (Blocked) = proces čeká na vnější událost (I/O)",
        "b": "• Ready -> Running = plánovač přiřadí CPU novému procesu\n• Running -> Waiting = volání I/O, čekání na událost\n• Running -> Ready = vypršel časový kvantum\n• Waiting -> Ready = událost nastala -> Dokončení I/O",
        "c": "• Identifikátor procesu (PID)\n• Stav procesu (ready, running, blocked...)\n• Kontext CPU (registry, PC, PSW)\n• Údaje plánovače\n• Informace o otevřených souborech\n• Časové razítko\n• Vlastník a práva\n• Adresový prostor (text, data, heap, stack, mapování paměti)",
        "d": "• Proces = aktivní/dynamická instance programu vložená do operační paměti s vlastním\nkontextem běhu (příprava pokrmu dle receptu)\n• Program = pasivní/statický soubor instrukcí, dat a kódu (recept)"
      },
      "correct": "b",
      "correct_answer": "• Ready -> Running = plánovač přiřadí CPU novému procesu\n• Running -> Waiting = volání I/O, čekání na událost\n• Running -> Ready = vypršel časový kvantum\n• Waiting -> Ready = událost nastala -> Dokončení I/O",
      "explanation": "Správná možnost odpovídá původní kartičce: • Ready -> Running = plánovač přiřadí CPU novému procesu • Running -> Waiting = volání I/O, čekání na událost • Running -> Ready = vypršel časový kvantum • Waiting -> Ready = událost nastala -> Dokončení I/O Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-07-04",
        "b": "bosys-07-05",
        "c": "bosys-07-02",
        "d": "bosys-07-01"
      },
      "tags": [
        "BOSYS",
        "sekce-07",
        "implementace-procesu-v-os-proces-a-program-tabulka",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-08-01",
      "source_card_id": "bosys-08-01",
      "stable_id": "caa87260",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Příčiny vzniku procesu a spuštění nového programu v posixových systémech, související systémová volání, hierarchie procesů.",
      "options": {
        "a": "• Signál = jednoduchá zpráva procesům, zpracována buď jádrem nebo navázanou funkcí\n→ jsou zpracovávány typicky jako ukončení procesu\n→ pozastavení a pokračování pozastaveného procesu\n→ lze také ignorovat nebo obsloužit vlastní funkcí\n• Příklady signálů:\n◦ SIGINT (přerušení)\n◦ SIGTERM (žádost o ukončení)\n◦ SIGSTP (pozastavení procesu)\n◦ SIGCHLD (signalizace ukončení potomka)",
        "b": "• R = running/runnable = běžící nebo připravený\n• S = sleep = blokovaný\n• D = uninterruptible sleep = nepřerušitelný spánek\n• T = stopped/traced = pozastavený nebo krokovaný\n• Z = zombie = ukončený, ale rodič nečekal",
        "c": "• Důvody zániku = systémovým voláním, detekcí chyby a ukončení, nedobrovolná chyba a\nzabití jiným procesem nebo jádrem\n• exit () = okamžitě ukončí proces\n• wait() = čekání na změnu stavu, například ukončení",
        "d": "• Vznik = vytvoření jádrem, pomocí systémového volání nebo požadavkem uživatele\n• fork(2) = vytvoří nový proces (duplikuje ten rodičovský)\n• execve(2), system(3), exec(3)= nahradí aktuální program procesu novým programem\n• Hierarchie = procesy tvoří strom, je jeden kořenový proces (init), ostatní procesy\nvznikají jako potomci"
      },
      "correct": "d",
      "correct_answer": "• Vznik = vytvoření jádrem, pomocí systémového volání nebo požadavkem uživatele\n• fork(2) = vytvoří nový proces (duplikuje ten rodičovský)\n• execve(2), system(3), exec(3)= nahradí aktuální program procesu novým programem\n• Hierarchie = procesy tvoří strom, je jeden kořenový proces (init), ostatní procesy\nvznikají jako potomci",
      "explanation": "Správná možnost odpovídá původní kartičce: • Vznik = vytvoření jádrem, pomocí systémového volání nebo požadavkem uživatele • fork(2) = vytvoří nový proces (duplikuje ten rodičovský) • execve(2), system(3), exec(3)= nahradí aktuální program procesu novým programem • Hierarchie = procesy tvoří strom, je jeden kořenový proces (init), ostatní procesy vznikají jako potomci Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-08-04",
        "b": "bosys-08-03",
        "c": "bosys-08-02",
        "d": "bosys-08-01"
      },
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-08-02",
      "source_card_id": "bosys-08-02",
      "stable_id": "79a0f6e5",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Příčiny zániku procesu a čekání na potomka v posixových systémech, související systémová volání.",
      "options": {
        "a": "• Důvody zániku = systémovým voláním, detekcí chyby a ukončení, nedobrovolná chyba a\nzabití jiným procesem nebo jádrem\n• exit () = okamžitě ukončí proces\n• wait() = čekání na změnu stavu, například ukončení",
        "b": "• R = running/runnable = běžící nebo připravený\n• S = sleep = blokovaný\n• D = uninterruptible sleep = nepřerušitelný spánek\n• T = stopped/traced = pozastavený nebo krokovaný\n• Z = zombie = ukončený, ale rodič nečekal",
        "c": "• Signál = jednoduchá zpráva procesům, zpracována buď jádrem nebo navázanou funkcí\n→ jsou zpracovávány typicky jako ukončení procesu\n→ pozastavení a pokračování pozastaveného procesu\n→ lze také ignorovat nebo obsloužit vlastní funkcí\n• Příklady signálů:\n◦ SIGINT (přerušení)\n◦ SIGTERM (žádost o ukončení)\n◦ SIGSTP (pozastavení procesu)\n◦ SIGCHLD (signalizace ukončení potomka)",
        "d": "• Vznik = vytvoření jádrem, pomocí systémového volání nebo požadavkem uživatele\n• fork(2) = vytvoří nový proces (duplikuje ten rodičovský)\n• execve(2), system(3), exec(3)= nahradí aktuální program procesu novým programem\n• Hierarchie = procesy tvoří strom, je jeden kořenový proces (init), ostatní procesy\nvznikají jako potomci"
      },
      "correct": "a",
      "correct_answer": "• Důvody zániku = systémovým voláním, detekcí chyby a ukončení, nedobrovolná chyba a\nzabití jiným procesem nebo jádrem\n• exit () = okamžitě ukončí proces\n• wait() = čekání na změnu stavu, například ukončení",
      "explanation": "Správná možnost odpovídá původní kartičce: • Důvody zániku = systémovým voláním, detekcí chyby a ukončení, nedobrovolná chyba a zabití jiným procesem nebo jádrem • exit () = okamžitě ukončí proces • wait() = čekání na změnu stavu, například ukončení Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-08-02",
        "b": "bosys-08-03",
        "c": "bosys-08-04",
        "d": "bosys-08-01"
      },
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-08-03",
      "source_card_id": "bosys-08-03",
      "stable_id": "8a762053",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Stavy procesů v Linuxu.",
      "options": {
        "a": "• Vznik = vytvoření jádrem, pomocí systémového volání nebo požadavkem uživatele\n• fork(2) = vytvoří nový proces (duplikuje ten rodičovský)\n• execve(2), system(3), exec(3)= nahradí aktuální program procesu novým programem\n• Hierarchie = procesy tvoří strom, je jeden kořenový proces (init), ostatní procesy\nvznikají jako potomci",
        "b": "• Signál = jednoduchá zpráva procesům, zpracována buď jádrem nebo navázanou funkcí\n→ jsou zpracovávány typicky jako ukončení procesu\n→ pozastavení a pokračování pozastaveného procesu\n→ lze také ignorovat nebo obsloužit vlastní funkcí\n• Příklady signálů:\n◦ SIGINT (přerušení)\n◦ SIGTERM (žádost o ukončení)\n◦ SIGSTP (pozastavení procesu)\n◦ SIGCHLD (signalizace ukončení potomka)",
        "c": "• Důvody zániku = systémovým voláním, detekcí chyby a ukončení, nedobrovolná chyba a\nzabití jiným procesem nebo jádrem\n• exit () = okamžitě ukončí proces\n• wait() = čekání na změnu stavu, například ukončení",
        "d": "• R = running/runnable = běžící nebo připravený\n• S = sleep = blokovaný\n• D = uninterruptible sleep = nepřerušitelný spánek\n• T = stopped/traced = pozastavený nebo krokovaný\n• Z = zombie = ukončený, ale rodič nečekal"
      },
      "correct": "d",
      "correct_answer": "• R = running/runnable = běžící nebo připravený\n• S = sleep = blokovaný\n• D = uninterruptible sleep = nepřerušitelný spánek\n• T = stopped/traced = pozastavený nebo krokovaný\n• Z = zombie = ukončený, ale rodič nečekal",
      "explanation": "Správná možnost odpovídá původní kartičce: • R = running/runnable = běžící nebo připravený • S = sleep = blokovaný • D = uninterruptible sleep = nepřerušitelný spánek • T = stopped/traced = pozastavený nebo krokovaný • Z = zombie = ukončený, ale rodič nečekal Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-08-01",
        "b": "bosys-08-04",
        "c": "bosys-08-02",
        "d": "bosys-08-03"
      },
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-08-04",
      "source_card_id": "bosys-08-04",
      "stable_id": "e3a58b9c",
      "section_index": 8,
      "section": "Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu (podle příkazu ps); posixové signály a jejich zpracování.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Posixové signály, možnosti jejich zpracování a příklady.",
      "options": {
        "a": "• Signál = jednoduchá zpráva procesům, zpracována buď jádrem nebo navázanou funkcí\n→ jsou zpracovávány typicky jako ukončení procesu\n→ pozastavení a pokračování pozastaveného procesu\n→ lze také ignorovat nebo obsloužit vlastní funkcí\n• Příklady signálů:\n◦ SIGINT (přerušení)\n◦ SIGTERM (žádost o ukončení)\n◦ SIGSTP (pozastavení procesu)\n◦ SIGCHLD (signalizace ukončení potomka)",
        "b": "• R = running/runnable = běžící nebo připravený\n• S = sleep = blokovaný\n• D = uninterruptible sleep = nepřerušitelný spánek\n• T = stopped/traced = pozastavený nebo krokovaný\n• Z = zombie = ukončený, ale rodič nečekal",
        "c": "• Vznik = vytvoření jádrem, pomocí systémového volání nebo požadavkem uživatele\n• fork(2) = vytvoří nový proces (duplikuje ten rodičovský)\n• execve(2), system(3), exec(3)= nahradí aktuální program procesu novým programem\n• Hierarchie = procesy tvoří strom, je jeden kořenový proces (init), ostatní procesy\nvznikají jako potomci",
        "d": "• Důvody zániku = systémovým voláním, detekcí chyby a ukončení, nedobrovolná chyba a\nzabití jiným procesem nebo jádrem\n• exit () = okamžitě ukončí proces\n• wait() = čekání na změnu stavu, například ukončení"
      },
      "correct": "a",
      "correct_answer": "• Signál = jednoduchá zpráva procesům, zpracována buď jádrem nebo navázanou funkcí\n→ jsou zpracovávány typicky jako ukončení procesu\n→ pozastavení a pokračování pozastaveného procesu\n→ lze také ignorovat nebo obsloužit vlastní funkcí\n• Příklady signálů:\n◦ SIGINT (přerušení)\n◦ SIGTERM (žádost o ukončení)\n◦ SIGSTP (pozastavení procesu)\n◦ SIGCHLD (signalizace ukončení potomka)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Signál = jednoduchá zpráva procesům, zpracována buď jádrem nebo navázanou funkcí → jsou zpracovávány typicky jako ukončení procesu → pozastavení a pokračování pozastaveného procesu → lze také ignorovat nebo obsloužit vlastní funkcí • Příklady signálů: ◦ SIGINT (přerušení) ◦ SIGTERM (žádost o ukončení) ◦ SIGSTP (pozastavení procesu) ◦ SIGCHLD (signalizace… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-08-04",
        "b": "bosys-08-03",
        "c": "bosys-08-01",
        "d": "bosys-08-02"
      },
      "tags": [
        "BOSYS",
        "sekce-08",
        "procesy-v-os-unix-linux-vznik-a-zanik",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-09-01",
      "source_card_id": "bosys-09-01",
      "stable_id": "f4412dfb",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Motivace zavedení vláken.",
      "options": {
        "a": "• Společné = adresní prostor a prostředky (otevřené soubory)\n• Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...)",
        "b": "• Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven\n• Výhody:\n◦ lepší režie, nevyžaduje přechod do režimu jádra\n◦ strategie plánovače lze přizpůsobit aplikaci\n• Nevýhody:\n◦ blokace jednoho vlákna blokuje celý proces\n◦ složitá implementace knihoven\n• S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault)\n• Výhody:\n◦ lze provádět i vlákna, jejichž vlákno způsobilo page-fault\n◦ není třeba neblokujícího volání\n• Nevýhody:\n◦ horší režie (kvůli režimu Kernel)\n◦ pevná strategie plánovače vláken",
        "c": "Motivace zavedení vláken.\n• Multithreading\n• Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP)\n• Zjednodušení programování\n• Nižší režie = vlákna vznikají rychleji než procesy\n• Paralelní zpracování",
        "d": "• Nutno alokovat některé globální proměnné přímo pro samostatné vlákno\n→ Riziko souběhu a závodních podmínek\n• Nereentrálnost funkcí = vstoupí-li vlákno, některé struktury jsou dočasně v\nnekonzistentním stavu a vstoupí-li jiné, dojde k narušení konzistence dat"
      },
      "correct": "c",
      "correct_answer": "Motivace zavedení vláken.\n• Multithreading\n• Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP)\n• Zjednodušení programování\n• Nižší režie = vlákna vznikají rychleji než procesy\n• Paralelní zpracování",
      "explanation": "Správná možnost odpovídá původní kartičce: Motivace zavedení vláken. • Multithreading • Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP) • Zjednodušení programování • Nižší režie = vlákna vznikají rychleji než procesy • Paralelní zpracování Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-09-02",
        "b": "bosys-09-04",
        "c": "bosys-09-01",
        "d": "bosys-09-05"
      },
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-09-02",
      "source_card_id": "bosys-09-02",
      "stable_id": "43776192",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Společné a samostatné položky metadat procesů/vláken.",
      "options": {
        "a": "Motivace zavedení vláken.\n• Multithreading\n• Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP)\n• Zjednodušení programování\n• Nižší režie = vlákna vznikají rychleji než procesy\n• Paralelní zpracování",
        "b": "• Společné = adresní prostor a prostředky (otevřené soubory)\n• Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...)",
        "c": "• Mutex = vzájemné vyloučení, zamkne KS -> pouze jedno vlákno má přístup\n• Semafor = řízení přístupu k omezenému počtu prostředků\n• Bariéra = čekání více vláken na dosažení určitého bodu\n• Podmínková proměnná = vlákna čekají na splnění nějaké podmínky",
        "d": "• Nutno alokovat některé globální proměnné přímo pro samostatné vlákno\n→ Riziko souběhu a závodních podmínek\n• Nereentrálnost funkcí = vstoupí-li vlákno, některé struktury jsou dočasně v\nnekonzistentním stavu a vstoupí-li jiné, dojde k narušení konzistence dat"
      },
      "correct": "b",
      "correct_answer": "• Společné = adresní prostor a prostředky (otevřené soubory)\n• Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Společné = adresní prostor a prostředky (otevřené soubory) • Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-09-01",
        "b": "bosys-09-02",
        "c": "bosys-09-06",
        "d": "bosys-09-05"
      },
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-09-03",
      "source_card_id": "bosys-09-03",
      "stable_id": "f28b2d7b",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Důvody vyhrazené části paměti pro každé vlákno.",
      "options": {
        "a": "• Každé vlákno potřebuje vlastní zásobník pro nezávislou správu volání funkcí, návratových\nadres, lokálních proměnných, stabilitu a bezpečnost",
        "b": "• Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven\n• Výhody:\n◦ lepší režie, nevyžaduje přechod do režimu jádra\n◦ strategie plánovače lze přizpůsobit aplikaci\n• Nevýhody:\n◦ blokace jednoho vlákna blokuje celý proces\n◦ složitá implementace knihoven\n• S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault)\n• Výhody:\n◦ lze provádět i vlákna, jejichž vlákno způsobilo page-fault\n◦ není třeba neblokujícího volání\n• Nevýhody:\n◦ horší režie (kvůli režimu Kernel)\n◦ pevná strategie plánovače vláken",
        "c": "Motivace zavedení vláken.\n• Multithreading\n• Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP)\n• Zjednodušení programování\n• Nižší režie = vlákna vznikají rychleji než procesy\n• Paralelní zpracování",
        "d": "• Společné = adresní prostor a prostředky (otevřené soubory)\n• Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...)"
      },
      "correct": "a",
      "correct_answer": "• Každé vlákno potřebuje vlastní zásobník pro nezávislou správu volání funkcí, návratových\nadres, lokálních proměnných, stabilitu a bezpečnost",
      "explanation": "Správná možnost odpovídá původní kartičce: • Každé vlákno potřebuje vlastní zásobník pro nezávislou správu volání funkcí, návratových adres, lokálních proměnných, stabilitu a bezpečnost Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-09-03",
        "b": "bosys-09-04",
        "c": "bosys-09-01",
        "d": "bosys-09-02"
      },
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-09-04",
      "source_card_id": "bosys-09-04",
      "stable_id": "eda53023",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Implementace vláken s podporou OS a bez ní, výhody a nevýhody.",
      "options": {
        "a": "• Společné = adresní prostor a prostředky (otevřené soubory)\n• Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...)",
        "b": "Motivace zavedení vláken.\n• Multithreading\n• Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP)\n• Zjednodušení programování\n• Nižší režie = vlákna vznikají rychleji než procesy\n• Paralelní zpracování",
        "c": "• Mutex = vzájemné vyloučení, zamkne KS -> pouze jedno vlákno má přístup\n• Semafor = řízení přístupu k omezenému počtu prostředků\n• Bariéra = čekání více vláken na dosažení určitého bodu\n• Podmínková proměnná = vlákna čekají na splnění nějaké podmínky",
        "d": "• Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven\n• Výhody:\n◦ lepší režie, nevyžaduje přechod do režimu jádra\n◦ strategie plánovače lze přizpůsobit aplikaci\n• Nevýhody:\n◦ blokace jednoho vlákna blokuje celý proces\n◦ složitá implementace knihoven\n• S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault)\n• Výhody:\n◦ lze provádět i vlákna, jejichž vlákno způsobilo page-fault\n◦ není třeba neblokujícího volání\n• Nevýhody:\n◦ horší režie (kvůli režimu Kernel)\n◦ pevná strategie plánovače vláken"
      },
      "correct": "d",
      "correct_answer": "• Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven\n• Výhody:\n◦ lepší režie, nevyžaduje přechod do režimu jádra\n◦ strategie plánovače lze přizpůsobit aplikaci\n• Nevýhody:\n◦ blokace jednoho vlákna blokuje celý proces\n◦ složitá implementace knihoven\n• S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault)\n• Výhody:\n◦ lze provádět i vlákna, jejichž vlákno způsobilo page-fault\n◦ není třeba neblokujícího volání\n• Nevýhody:\n◦ horší režie (kvůli režimu Kernel)\n◦ pevná strategie plánovače vláken",
      "explanation": "Správná možnost odpovídá původní kartičce: • Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven • Výhody: ◦ lepší režie, nevyžaduje přechod do režimu jádra ◦ strategie plánovače lze přizpůsobit aplikaci • Nevýhody: ◦ blokace jednoho vlákna blokuje celý proces ◦ složitá implementace knihoven • S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault) •… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-09-02",
        "b": "bosys-09-01",
        "c": "bosys-09-06",
        "d": "bosys-09-04"
      },
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-09-05",
      "source_card_id": "bosys-09-05",
      "stable_id": "003b1afa",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Komplikace při zavádění vláken.",
      "options": {
        "a": "• Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven\n• Výhody:\n◦ lepší režie, nevyžaduje přechod do režimu jádra\n◦ strategie plánovače lze přizpůsobit aplikaci\n• Nevýhody:\n◦ blokace jednoho vlákna blokuje celý proces\n◦ složitá implementace knihoven\n• S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault)\n• Výhody:\n◦ lze provádět i vlákna, jejichž vlákno způsobilo page-fault\n◦ není třeba neblokujícího volání\n• Nevýhody:\n◦ horší režie (kvůli režimu Kernel)\n◦ pevná strategie plánovače vláken",
        "b": "• Nutno alokovat některé globální proměnné přímo pro samostatné vlákno\n→ Riziko souběhu a závodních podmínek\n• Nereentrálnost funkcí = vstoupí-li vlákno, některé struktury jsou dočasně v\nnekonzistentním stavu a vstoupí-li jiné, dojde k narušení konzistence dat",
        "c": "• Mutex = vzájemné vyloučení, zamkne KS -> pouze jedno vlákno má přístup\n• Semafor = řízení přístupu k omezenému počtu prostředků\n• Bariéra = čekání více vláken na dosažení určitého bodu\n• Podmínková proměnná = vlákna čekají na splnění nějaké podmínky",
        "d": "• Společné = adresní prostor a prostředky (otevřené soubory)\n• Samostatné pro vlákna = programový čítač, zásobník, registry, stav (běžící, blokovaný, ...)"
      },
      "correct": "b",
      "correct_answer": "• Nutno alokovat některé globální proměnné přímo pro samostatné vlákno\n→ Riziko souběhu a závodních podmínek\n• Nereentrálnost funkcí = vstoupí-li vlákno, některé struktury jsou dočasně v\nnekonzistentním stavu a vstoupí-li jiné, dojde k narušení konzistence dat",
      "explanation": "Správná možnost odpovídá původní kartičce: • Nutno alokovat některé globální proměnné přímo pro samostatné vlákno → Riziko souběhu a závodních podmínek • Nereentrálnost funkcí = vstoupí-li vlákno, některé struktury jsou dočasně v nekonzistentním stavu a vstoupí-li jiné, dojde k narušení konzistence dat Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-09-04",
        "b": "bosys-09-05",
        "c": "bosys-09-06",
        "d": "bosys-09-02"
      },
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-09-06",
      "source_card_id": "bosys-09-06",
      "stable_id": "eb3a3c01",
      "section_index": 9,
      "section": "Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken: mutex, bariéra, podmínková proměnná a jejich použití.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Posixová knihovna vláken: nástroje pro řešení problémů souběhu a jejich účel.",
      "options": {
        "a": "• Každé vlákno potřebuje vlastní zásobník pro nezávislou správu volání funkcí, návratových\nadres, lokálních proměnných, stabilitu a bezpečnost",
        "b": "Motivace zavedení vláken.\n• Multithreading\n• Zvýšení výkonu = vhodné využívat na víceprocesorových systémech (SMP)\n• Zjednodušení programování\n• Nižší režie = vlákna vznikají rychleji než procesy\n• Paralelní zpracování",
        "c": "• Mutex = vzájemné vyloučení, zamkne KS -> pouze jedno vlákno má přístup\n• Semafor = řízení přístupu k omezenému počtu prostředků\n• Bariéra = čekání více vláken na dosažení určitého bodu\n• Podmínková proměnná = vlákna čekají na splnění nějaké podmínky",
        "d": "• Bez podpory OS (user-level) = vlákna třeba implementovat pomocí knihoven\n• Výhody:\n◦ lepší režie, nevyžaduje přechod do režimu jádra\n◦ strategie plánovače lze přizpůsobit aplikaci\n• Nevýhody:\n◦ blokace jednoho vlákna blokuje celý proces\n◦ složitá implementace knihoven\n• S podporou OS (kernel-level) = odstraněny nevýhody vlastní implementace (page-fault)\n• Výhody:\n◦ lze provádět i vlákna, jejichž vlákno způsobilo page-fault\n◦ není třeba neblokujícího volání\n• Nevýhody:\n◦ horší režie (kvůli režimu Kernel)\n◦ pevná strategie plánovače vláken"
      },
      "correct": "c",
      "correct_answer": "• Mutex = vzájemné vyloučení, zamkne KS -> pouze jedno vlákno má přístup\n• Semafor = řízení přístupu k omezenému počtu prostředků\n• Bariéra = čekání více vláken na dosažení určitého bodu\n• Podmínková proměnná = vlákna čekají na splnění nějaké podmínky",
      "explanation": "Správná možnost odpovídá původní kartičce: • Mutex = vzájemné vyloučení, zamkne KS -> pouze jedno vlákno má přístup • Semafor = řízení přístupu k omezenému počtu prostředků • Bariéra = čekání více vláken na dosažení určitého bodu • Podmínková proměnná = vlákna čekají na splnění nějaké podmínky Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-09-03",
        "b": "bosys-09-01",
        "c": "bosys-09-06",
        "d": "bosys-09-04"
      },
      "tags": [
        "BOSYS",
        "sekce-09",
        "vlakna-motivace-zavedeni-vlaken-proces-x-vlakno-mozne",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-10-01",
      "source_card_id": "bosys-10-01",
      "stable_id": "6d4dd7c1",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Úloha plánovače, režimy plánování procesů.",
      "options": {
        "a": "• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)\n• FCFS (First Come First Serve) = také znám jako FIFO\n◦ nepreemptivní, procesy jsou zpracovány v pořadí, v jakém přišly\n◦ jednoduchá implementace, ale dlouhé procesy blokují krátké\n• SJF (Shortest Job First)\n◦ nepreemptivní, vybírá se proces s nejkratší předpokládanou dobou běhu\n◦ optimální doba čekání, ale dlouhé procesy mohou hladovět\n• Shortest Remaining Time Next\n◦ preemptivní varianta SJF, vybírá se proces s nejkratší dobou do dokončení\n◦ lze přerušit proces, pokud přijde kratší úloha\n◦ dále minimalizuje obrat, také hrozí vyhladovění",
        "b": "• Round-Robin (cyklická obsluha)\n◦ preemptivní, každý proces má časové kvantum k využití CPU\n◦ přepnutí na další proces je po vypršení kvanta, nebo blokujícím systémovým voláním\n◦ nutno volit optimální čas (např. 10 ms)\n• Priority Scheduling\n◦ každý proces má přidělenou prioritu, vybírá se nejvyšší priorita\n◦ obvykle pracuje s více frontami pro připravené procesy\n◦ může nastat vyhladovění menších priorit -> lze řešit dynamickou složkou priorit\n• Fair Share (FSS) a Completely Fair Share (CFS)\n◦ zaručuje každému uživateli stejné podmínky pro využívání CPU\n◦ Příklad: uživatel A má 9 procesů, uživatel B má 1 proces -> oba mají na vykonání\n50% času (1/počet uživatelů)\n• Lottery Scheduling\n◦ procesy dostávají “lístky” a periodicky se náhodně losuje\n◦ výherní lístek dostane časové kvantum\n◦ důležité procesy mohou mít více lístků (priorita)\n◦ snadná implementace, lze použít jako aproximaci jiných alg.",
        "c": "• Spravuje přidělování CPU procesům\n• Typy plánování:\n◦ Long-term = rozhoduje, které procesy se mají zpracovat a které ukončit\n◦ Medium-term = určuje, které procesy se mají odložit či vrátit do paměti\n◦ Short-term = rozhoduje, který z připravených procesů dostane CPU a na jak dlouho\n• Režimy:\n• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)",
        "d": "• Rovnováha zatížení systému\n• Spravedlnost = každý proces by měl stejně času\n• Dodržování strategií:\n◦ Interaktivní systémy = minimalizace odezvy, proporcionalita\n◦ Dávkové systémy = maximalizovat propustnost, minim. obrat, vysoké využití CPU\n◦ Real Time systémy = respektovat lhůty, předvídatelnost"
      },
      "correct": "c",
      "correct_answer": "• Spravuje přidělování CPU procesům\n• Typy plánování:\n◦ Long-term = rozhoduje, které procesy se mají zpracovat a které ukončit\n◦ Medium-term = určuje, které procesy se mají odložit či vrátit do paměti\n◦ Short-term = rozhoduje, který z připravených procesů dostane CPU a na jak dlouho\n• Režimy:\n• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Spravuje přidělování CPU procesům • Typy plánování: ◦ Long-term = rozhoduje, které procesy se mají zpracovat a které ukončit ◦ Medium-term = určuje, které procesy se mají odložit či vrátit do paměti ◦ Short-term = rozhoduje, který z připravených procesů dostane CPU a na jak dlouho • Režimy: • Nepreemptivní/Kooperativní (proces se sám vzdá CPU) •… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-10-03",
        "b": "bosys-10-04",
        "c": "bosys-10-01",
        "d": "bosys-10-02"
      },
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-10-02",
      "source_card_id": "bosys-10-02",
      "stable_id": "bd8d26df",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Cíle plánování (obecně a dle určení OS).",
      "options": {
        "a": "• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)\n• FCFS (First Come First Serve) = také znám jako FIFO\n◦ nepreemptivní, procesy jsou zpracovány v pořadí, v jakém přišly\n◦ jednoduchá implementace, ale dlouhé procesy blokují krátké\n• SJF (Shortest Job First)\n◦ nepreemptivní, vybírá se proces s nejkratší předpokládanou dobou běhu\n◦ optimální doba čekání, ale dlouhé procesy mohou hladovět\n• Shortest Remaining Time Next\n◦ preemptivní varianta SJF, vybírá se proces s nejkratší dobou do dokončení\n◦ lze přerušit proces, pokud přijde kratší úloha\n◦ dále minimalizuje obrat, také hrozí vyhladovění",
        "b": "• Spravuje přidělování CPU procesům\n• Typy plánování:\n◦ Long-term = rozhoduje, které procesy se mají zpracovat a které ukončit\n◦ Medium-term = určuje, které procesy se mají odložit či vrátit do paměti\n◦ Short-term = rozhoduje, který z připravených procesů dostane CPU a na jak dlouho\n• Režimy:\n• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)",
        "c": "• Rovnováha zatížení systému\n• Spravedlnost = každý proces by měl stejně času\n• Dodržování strategií:\n◦ Interaktivní systémy = minimalizace odezvy, proporcionalita\n◦ Dávkové systémy = maximalizovat propustnost, minim. obrat, vysoké využití CPU\n◦ Real Time systémy = respektovat lhůty, předvídatelnost",
        "d": "• Round-Robin (cyklická obsluha)\n◦ preemptivní, každý proces má časové kvantum k využití CPU\n◦ přepnutí na další proces je po vypršení kvanta, nebo blokujícím systémovým voláním\n◦ nutno volit optimální čas (např. 10 ms)\n• Priority Scheduling\n◦ každý proces má přidělenou prioritu, vybírá se nejvyšší priorita\n◦ obvykle pracuje s více frontami pro připravené procesy\n◦ může nastat vyhladovění menších priorit -> lze řešit dynamickou složkou priorit\n• Fair Share (FSS) a Completely Fair Share (CFS)\n◦ zaručuje každému uživateli stejné podmínky pro využívání CPU\n◦ Příklad: uživatel A má 9 procesů, uživatel B má 1 proces -> oba mají na vykonání\n50% času (1/počet uživatelů)\n• Lottery Scheduling\n◦ procesy dostávají “lístky” a periodicky se náhodně losuje\n◦ výherní lístek dostane časové kvantum\n◦ důležité procesy mohou mít více lístků (priorita)\n◦ snadná implementace, lze použít jako aproximaci jiných alg."
      },
      "correct": "c",
      "correct_answer": "• Rovnováha zatížení systému\n• Spravedlnost = každý proces by měl stejně času\n• Dodržování strategií:\n◦ Interaktivní systémy = minimalizace odezvy, proporcionalita\n◦ Dávkové systémy = maximalizovat propustnost, minim. obrat, vysoké využití CPU\n◦ Real Time systémy = respektovat lhůty, předvídatelnost",
      "explanation": "Správná možnost odpovídá původní kartičce: • Rovnováha zatížení systému • Spravedlnost = každý proces by měl stejně času • Dodržování strategií: ◦ Interaktivní systémy = minimalizace odezvy, proporcionalita ◦ Dávkové systémy = maximalizovat propustnost, minim. obrat, vysoké využití CPU ◦ Real Time systémy = respektovat lhůty, předvídatelnost Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-10-03",
        "b": "bosys-10-01",
        "c": "bosys-10-02",
        "d": "bosys-10-04"
      },
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-10-03",
      "source_card_id": "bosys-10-03",
      "stable_id": "f226fc95",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis plánovacích algoritmů: historické.",
      "options": {
        "a": "• Round-Robin (cyklická obsluha)\n◦ preemptivní, každý proces má časové kvantum k využití CPU\n◦ přepnutí na další proces je po vypršení kvanta, nebo blokujícím systémovým voláním\n◦ nutno volit optimální čas (např. 10 ms)\n• Priority Scheduling\n◦ každý proces má přidělenou prioritu, vybírá se nejvyšší priorita\n◦ obvykle pracuje s více frontami pro připravené procesy\n◦ může nastat vyhladovění menších priorit -> lze řešit dynamickou složkou priorit\n• Fair Share (FSS) a Completely Fair Share (CFS)\n◦ zaručuje každému uživateli stejné podmínky pro využívání CPU\n◦ Příklad: uživatel A má 9 procesů, uživatel B má 1 proces -> oba mají na vykonání\n50% času (1/počet uživatelů)\n• Lottery Scheduling\n◦ procesy dostávají “lístky” a periodicky se náhodně losuje\n◦ výherní lístek dostane časové kvantum\n◦ důležité procesy mohou mít více lístků (priorita)\n◦ snadná implementace, lze použít jako aproximaci jiných alg.",
        "b": "• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)\n• FCFS (First Come First Serve) = také znám jako FIFO\n◦ nepreemptivní, procesy jsou zpracovány v pořadí, v jakém přišly\n◦ jednoduchá implementace, ale dlouhé procesy blokují krátké\n• SJF (Shortest Job First)\n◦ nepreemptivní, vybírá se proces s nejkratší předpokládanou dobou běhu\n◦ optimální doba čekání, ale dlouhé procesy mohou hladovět\n• Shortest Remaining Time Next\n◦ preemptivní varianta SJF, vybírá se proces s nejkratší dobou do dokončení\n◦ lze přerušit proces, pokud přijde kratší úloha\n◦ dále minimalizuje obrat, také hrozí vyhladovění",
        "c": "• Spravuje přidělování CPU procesům\n• Typy plánování:\n◦ Long-term = rozhoduje, které procesy se mají zpracovat a které ukončit\n◦ Medium-term = určuje, které procesy se mají odložit či vrátit do paměti\n◦ Short-term = rozhoduje, který z připravených procesů dostane CPU a na jak dlouho\n• Režimy:\n• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)",
        "d": "• Rovnováha zatížení systému\n• Spravedlnost = každý proces by měl stejně času\n• Dodržování strategií:\n◦ Interaktivní systémy = minimalizace odezvy, proporcionalita\n◦ Dávkové systémy = maximalizovat propustnost, minim. obrat, vysoké využití CPU\n◦ Real Time systémy = respektovat lhůty, předvídatelnost"
      },
      "correct": "b",
      "correct_answer": "• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)\n• FCFS (First Come First Serve) = také znám jako FIFO\n◦ nepreemptivní, procesy jsou zpracovány v pořadí, v jakém přišly\n◦ jednoduchá implementace, ale dlouhé procesy blokují krátké\n• SJF (Shortest Job First)\n◦ nepreemptivní, vybírá se proces s nejkratší předpokládanou dobou běhu\n◦ optimální doba čekání, ale dlouhé procesy mohou hladovět\n• Shortest Remaining Time Next\n◦ preemptivní varianta SJF, vybírá se proces s nejkratší dobou do dokončení\n◦ lze přerušit proces, pokud přijde kratší úloha\n◦ dále minimalizuje obrat, také hrozí vyhladovění",
      "explanation": "Správná možnost odpovídá původní kartičce: • Nepreemptivní/Kooperativní (proces se sám vzdá CPU) • Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU) • FCFS (First Come First Serve) = také znám jako FIFO ◦ nepreemptivní, procesy jsou zpracovány v pořadí, v jakém přišly ◦ jednoduchá implementace, ale dlouhé procesy blokují krátké • SJF (Shortest Job First) ◦ nepreemptivní, vybírá se… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-10-04",
        "b": "bosys-10-03",
        "c": "bosys-10-01",
        "d": "bosys-10-02"
      },
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-10-04",
      "source_card_id": "bosys-10-04",
      "stable_id": "4fb0ab99",
      "section_index": 10,
      "section": "Plánovač. Cíle plánování, režimy plánování, plánovací kriteria (cíle) pro plánovací algoritmy, plánovací algoritmy.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Popis plánovacích algoritmů: moderní a specifické.",
      "options": {
        "a": "• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)\n• FCFS (First Come First Serve) = také znám jako FIFO\n◦ nepreemptivní, procesy jsou zpracovány v pořadí, v jakém přišly\n◦ jednoduchá implementace, ale dlouhé procesy blokují krátké\n• SJF (Shortest Job First)\n◦ nepreemptivní, vybírá se proces s nejkratší předpokládanou dobou běhu\n◦ optimální doba čekání, ale dlouhé procesy mohou hladovět\n• Shortest Remaining Time Next\n◦ preemptivní varianta SJF, vybírá se proces s nejkratší dobou do dokončení\n◦ lze přerušit proces, pokud přijde kratší úloha\n◦ dále minimalizuje obrat, také hrozí vyhladovění",
        "b": "• Round-Robin (cyklická obsluha)\n◦ preemptivní, každý proces má časové kvantum k využití CPU\n◦ přepnutí na další proces je po vypršení kvanta, nebo blokujícím systémovým voláním\n◦ nutno volit optimální čas (např. 10 ms)\n• Priority Scheduling\n◦ každý proces má přidělenou prioritu, vybírá se nejvyšší priorita\n◦ obvykle pracuje s více frontami pro připravené procesy\n◦ může nastat vyhladovění menších priorit -> lze řešit dynamickou složkou priorit\n• Fair Share (FSS) a Completely Fair Share (CFS)\n◦ zaručuje každému uživateli stejné podmínky pro využívání CPU\n◦ Příklad: uživatel A má 9 procesů, uživatel B má 1 proces -> oba mají na vykonání\n50% času (1/počet uživatelů)\n• Lottery Scheduling\n◦ procesy dostávají “lístky” a periodicky se náhodně losuje\n◦ výherní lístek dostane časové kvantum\n◦ důležité procesy mohou mít více lístků (priorita)\n◦ snadná implementace, lze použít jako aproximaci jiných alg.",
        "c": "• Spravuje přidělování CPU procesům\n• Typy plánování:\n◦ Long-term = rozhoduje, které procesy se mají zpracovat a které ukončit\n◦ Medium-term = určuje, které procesy se mají odložit či vrátit do paměti\n◦ Short-term = rozhoduje, který z připravených procesů dostane CPU a na jak dlouho\n• Režimy:\n• Nepreemptivní/Kooperativní (proces se sám vzdá CPU)\n• Preemptivní (plánovač rozhoduje, kdy a který proces dostane CPU)",
        "d": "• Rovnováha zatížení systému\n• Spravedlnost = každý proces by měl stejně času\n• Dodržování strategií:\n◦ Interaktivní systémy = minimalizace odezvy, proporcionalita\n◦ Dávkové systémy = maximalizovat propustnost, minim. obrat, vysoké využití CPU\n◦ Real Time systémy = respektovat lhůty, předvídatelnost"
      },
      "correct": "b",
      "correct_answer": "• Round-Robin (cyklická obsluha)\n◦ preemptivní, každý proces má časové kvantum k využití CPU\n◦ přepnutí na další proces je po vypršení kvanta, nebo blokujícím systémovým voláním\n◦ nutno volit optimální čas (např. 10 ms)\n• Priority Scheduling\n◦ každý proces má přidělenou prioritu, vybírá se nejvyšší priorita\n◦ obvykle pracuje s více frontami pro připravené procesy\n◦ může nastat vyhladovění menších priorit -> lze řešit dynamickou složkou priorit\n• Fair Share (FSS) a Completely Fair Share (CFS)\n◦ zaručuje každému uživateli stejné podmínky pro využívání CPU\n◦ Příklad: uživatel A má 9 procesů, uživatel B má 1 proces -> oba mají na vykonání\n50% času (1/počet uživatelů)\n• Lottery Scheduling\n◦ procesy dostávají “lístky” a periodicky se náhodně losuje\n◦ výherní lístek dostane časové kvantum\n◦ důležité procesy mohou mít více lístků (priorita)\n◦ snadná implementace, lze použít jako aproximaci jiných alg.",
      "explanation": "Správná možnost odpovídá původní kartičce: • Round-Robin (cyklická obsluha) ◦ preemptivní, každý proces má časové kvantum k využití CPU ◦ přepnutí na další proces je po vypršení kvanta, nebo blokujícím systémovým voláním ◦ nutno volit optimální čas (např. 10 ms) • Priority Scheduling ◦ každý proces má přidělenou prioritu, vybírá se nejvyšší priorita ◦ obvykle pracuje s více frontami pro připravené… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-10-03",
        "b": "bosys-10-04",
        "c": "bosys-10-01",
        "d": "bosys-10-02"
      },
      "tags": [
        "BOSYS",
        "sekce-10",
        "planovac-cile-planovani-rezimy-planovani-planovaci-kriteria-cile",
        "abcd-test"
      ],
      "points_hint": "6"
    },
    {
      "id": "bosys-abcd-11-01",
      "source_card_id": "bosys-11-01",
      "stable_id": "4c982f3a",
      "section_index": 11,
      "section": "Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem – příkazy at a crontab.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Specifické požadavky na plánování procesů v systémech reálného času, plánovatelnost.",
      "options": {
        "a": "• Procesy obvykle tvoří jednu frontu, ze které se proces vybere, pokud je volný procesor\n• Složitější plánování se na SMP příliš nepoužívá\n• Optimalizace:\n→ Sdílení zátěže = náhodné rozdělení zátěže mezi procesory\n◦ globální fronta vyžadující výlučný přístup\n◦ neefektivní metoda\n→ Skupinové plánování = související vlákna tvoří jeden proces\n◦ jsou plánována tak, aby běžela na různých procesorech současně\n◦ vlákna vyžadují častou interakci a synchronizaci\n◦ některé procesory mohou zůstat nevyužity, neboť vlákna čekají na uvolnění skupiny\nprocesorů\n→ Pevné přiřazení procesoru = vlákna jsou přiřazena specifickému procesoru\n◦ zvýší se tím efektivita využití cache na jednotlivých procesorech\n◦ některé procesory mohou zůstat nevyužity, neboť vlákno čeká na uvolnění konkrétního\nprocesoru\n→ Dynamické plánování = pokud se počet vláken průběžně mění\n◦ OS upravuje zátěž s cílem zlepšit využití procesorů -> obsazuje volné procesory\n◦ typicky se dává přednost novým vláknům -> porušení výhod skupinového plánování",
        "b": "• at = jednorázové spuštění v určitém čase Démon = atd\n• crontab = plánování periodických úloh Démon = crond\nOrientačně možnosti konfigurace.\n• Konf. at: Konf. cron\n• at now +1 hour -crontab –e -> vypíše uživatelův crontab\n• at 20:00 -crontab –l -> vypíše jeho obsah",
        "c": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy",
        "d": "• V těchto systémech je nutná nízká odezva a dodržení časových limitů\n• Používají speciální algoritmy založené obvykle na prioritách (např. Earliest Deadline First)\n• Plánovatelnost:\n◦ statické plánování procesů -> tabulkami je přesně stanoveno, kdy a která úloha má být\nspuštěna\n◦ dynamické plánování procesů -> pokud nevíme, které procesy budou spuštěny"
      },
      "correct": "d",
      "correct_answer": "• V těchto systémech je nutná nízká odezva a dodržení časových limitů\n• Používají speciální algoritmy založené obvykle na prioritách (např. Earliest Deadline First)\n• Plánovatelnost:\n◦ statické plánování procesů -> tabulkami je přesně stanoveno, kdy a která úloha má být\nspuštěna\n◦ dynamické plánování procesů -> pokud nevíme, které procesy budou spuštěny",
      "explanation": "Správná možnost odpovídá původní kartičce: • V těchto systémech je nutná nízká odezva a dodržení časových limitů • Používají speciální algoritmy založené obvykle na prioritách (např. Earliest Deadline First) • Plánovatelnost: ◦ statické plánování procesů -> tabulkami je přesně stanoveno, kdy a která úloha má být spuštěna ◦ dynamické plánování procesů -> pokud nevíme, které procesy budou spuštěny Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-11-02",
        "b": "bosys-11-03",
        "c": "bosys-12-01",
        "d": "bosys-11-01"
      },
      "tags": [
        "BOSYS",
        "sekce-11",
        "pozadavky-na-planovani-v-systemech-realneho-casu-moznosti",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-11-02",
      "source_card_id": "bosys-11-02",
      "stable_id": "6af5afde",
      "section_index": 11,
      "section": "Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem – příkazy at a crontab.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Plánování vláken na systémech SMP a možné optimalizace.",
      "options": {
        "a": "• V těchto systémech je nutná nízká odezva a dodržení časových limitů\n• Používají speciální algoritmy založené obvykle na prioritách (např. Earliest Deadline First)\n• Plánovatelnost:\n◦ statické plánování procesů -> tabulkami je přesně stanoveno, kdy a která úloha má být\nspuštěna\n◦ dynamické plánování procesů -> pokud nevíme, které procesy budou spuštěny",
        "b": "• at = jednorázové spuštění v určitém čase Démon = atd\n• crontab = plánování periodických úloh Démon = crond\nOrientačně možnosti konfigurace.\n• Konf. at: Konf. cron\n• at now +1 hour -crontab –e -> vypíše uživatelův crontab\n• at 20:00 -crontab –l -> vypíše jeho obsah",
        "c": "• Procesy obvykle tvoří jednu frontu, ze které se proces vybere, pokud je volný procesor\n• Složitější plánování se na SMP příliš nepoužívá\n• Optimalizace:\n→ Sdílení zátěže = náhodné rozdělení zátěže mezi procesory\n◦ globální fronta vyžadující výlučný přístup\n◦ neefektivní metoda\n→ Skupinové plánování = související vlákna tvoří jeden proces\n◦ jsou plánována tak, aby běžela na různých procesorech současně\n◦ vlákna vyžadují častou interakci a synchronizaci\n◦ některé procesory mohou zůstat nevyužity, neboť vlákna čekají na uvolnění skupiny\nprocesorů\n→ Pevné přiřazení procesoru = vlákna jsou přiřazena specifickému procesoru\n◦ zvýší se tím efektivita využití cache na jednotlivých procesorech\n◦ některé procesory mohou zůstat nevyužity, neboť vlákno čeká na uvolnění konkrétního\nprocesoru\n→ Dynamické plánování = pokud se počet vláken průběžně mění\n◦ OS upravuje zátěž s cílem zlepšit využití procesorů -> obsazuje volné procesory\n◦ typicky se dává přednost novým vláknům -> porušení výhod skupinového plánování",
        "d": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy"
      },
      "correct": "c",
      "correct_answer": "• Procesy obvykle tvoří jednu frontu, ze které se proces vybere, pokud je volný procesor\n• Složitější plánování se na SMP příliš nepoužívá\n• Optimalizace:\n→ Sdílení zátěže = náhodné rozdělení zátěže mezi procesory\n◦ globální fronta vyžadující výlučný přístup\n◦ neefektivní metoda\n→ Skupinové plánování = související vlákna tvoří jeden proces\n◦ jsou plánována tak, aby běžela na různých procesorech současně\n◦ vlákna vyžadují častou interakci a synchronizaci\n◦ některé procesory mohou zůstat nevyužity, neboť vlákna čekají na uvolnění skupiny\nprocesorů\n→ Pevné přiřazení procesoru = vlákna jsou přiřazena specifickému procesoru\n◦ zvýší se tím efektivita využití cache na jednotlivých procesorech\n◦ některé procesory mohou zůstat nevyužity, neboť vlákno čeká na uvolnění konkrétního\nprocesoru\n→ Dynamické plánování = pokud se počet vláken průběžně mění\n◦ OS upravuje zátěž s cílem zlepšit využití procesorů -> obsazuje volné procesory\n◦ typicky se dává přednost novým vláknům -> porušení výhod skupinového plánování",
      "explanation": "Správná možnost odpovídá původní kartičce: • Procesy obvykle tvoří jednu frontu, ze které se proces vybere, pokud je volný procesor • Složitější plánování se na SMP příliš nepoužívá • Optimalizace: → Sdílení zátěže = náhodné rozdělení zátěže mezi procesory ◦ globální fronta vyžadující výlučný přístup ◦ neefektivní metoda → Skupinové plánování = související vlákna tvoří jeden proces ◦ jsou plánována… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-11-01",
        "b": "bosys-11-03",
        "c": "bosys-11-02",
        "d": "bosys-12-01"
      },
      "tags": [
        "BOSYS",
        "sekce-11",
        "pozadavky-na-planovani-v-systemech-realneho-casu-moznosti",
        "abcd-test"
      ],
      "points_hint": "4× 2"
    },
    {
      "id": "bosys-abcd-11-03",
      "source_card_id": "bosys-11-03",
      "stable_id": "2cec49c1",
      "section_index": 11,
      "section": "Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem – příkazy at a crontab.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Příkazy pro nastavení spouštění úloh v daném čase a démony, které to obstarávají. Orientačně možnosti konfigurace.",
      "options": {
        "a": "• V těchto systémech je nutná nízká odezva a dodržení časových limitů\n• Používají speciální algoritmy založené obvykle na prioritách (např. Earliest Deadline First)\n• Plánovatelnost:\n◦ statické plánování procesů -> tabulkami je přesně stanoveno, kdy a která úloha má být\nspuštěna\n◦ dynamické plánování procesů -> pokud nevíme, které procesy budou spuštěny",
        "b": "• at = jednorázové spuštění v určitém čase Démon = atd\n• crontab = plánování periodických úloh Démon = crond\nOrientačně možnosti konfigurace.\n• Konf. at: Konf. cron\n• at now +1 hour -crontab –e -> vypíše uživatelův crontab\n• at 20:00 -crontab –l -> vypíše jeho obsah",
        "c": "• Procesy obvykle tvoří jednu frontu, ze které se proces vybere, pokud je volný procesor\n• Složitější plánování se na SMP příliš nepoužívá\n• Optimalizace:\n→ Sdílení zátěže = náhodné rozdělení zátěže mezi procesory\n◦ globální fronta vyžadující výlučný přístup\n◦ neefektivní metoda\n→ Skupinové plánování = související vlákna tvoří jeden proces\n◦ jsou plánována tak, aby běžela na různých procesorech současně\n◦ vlákna vyžadují častou interakci a synchronizaci\n◦ některé procesory mohou zůstat nevyužity, neboť vlákna čekají na uvolnění skupiny\nprocesorů\n→ Pevné přiřazení procesoru = vlákna jsou přiřazena specifickému procesoru\n◦ zvýší se tím efektivita využití cache na jednotlivých procesorech\n◦ některé procesory mohou zůstat nevyužity, neboť vlákno čeká na uvolnění konkrétního\nprocesoru\n→ Dynamické plánování = pokud se počet vláken průběžně mění\n◦ OS upravuje zátěž s cílem zlepšit využití procesorů -> obsazuje volné procesory\n◦ typicky se dává přednost novým vláknům -> porušení výhod skupinového plánování",
        "d": "• Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace)\n• Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá\nspráva paměti -> nutná defragmentace"
      },
      "correct": "b",
      "correct_answer": "• at = jednorázové spuštění v určitém čase Démon = atd\n• crontab = plánování periodických úloh Démon = crond\nOrientačně možnosti konfigurace.\n• Konf. at: Konf. cron\n• at now +1 hour -crontab –e -> vypíše uživatelův crontab\n• at 20:00 -crontab –l -> vypíše jeho obsah",
      "explanation": "Správná možnost odpovídá původní kartičce: • at = jednorázové spuštění v určitém čase Démon = atd • crontab = plánování periodických úloh Démon = crond Orientačně možnosti konfigurace. • Konf. at: Konf. cron • at now +1 hour -crontab –e -> vypíše uživatelův crontab • at 20:00 -crontab –l -> vypíše jeho obsah Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-11-01",
        "b": "bosys-11-03",
        "c": "bosys-11-02",
        "d": "bosys-12-03"
      },
      "tags": [
        "BOSYS",
        "sekce-11",
        "pozadavky-na-planovani-v-systemech-realneho-casu-moznosti",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-12-01",
      "source_card_id": "bosys-12-01",
      "stable_id": "69f1b971",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Důležité požadavky na operační paměť (na její vlastnosti, kritické pro běh OS).",
      "options": {
        "a": "• First Fit = první dostatečně velké bloky\n• Best Fit = nejmenší vhodný blok\n• Worst Fit = největší volný blok\n• Next Fit = prohledává paměť od oblasti, kam se naposledy umisťovalo (nejrychlejší)",
        "b": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy",
        "c": "• Paměť je rozdělena do pevně velkých oddílů (stejné/různé velikosti)\n• Stejně velké oblasti:\n◦ Proces je zaveden do libovolného volného oddílu\n◦ Vnitřní fragmentace, neefektivní využití přidělené paměti\n• Různě velké oblasti:\n◦ Více samostatných front podle velikosti oddílu (menší vnitřní fragmentace,\nale možná blokace procesů, které mohl běžet ve větší volné oblasti)\n◦ Jedna společné fronta s best-fit alg. (rychlejší, ale větší vnitřní fragmentace)",
        "d": "• Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace)\n• Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá\nspráva paměti -> nutná defragmentace"
      },
      "correct": "b",
      "correct_answer": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy",
      "explanation": "Správná možnost odpovídá původní kartičce: • Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy • Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť • Možnost sdílení paměti mezi procesy Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-12-04",
        "b": "bosys-12-01",
        "c": "bosys-12-02",
        "d": "bosys-12-03"
      },
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-12-02",
      "source_card_id": "bosys-12-02",
      "stable_id": "507bfea1",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Pevné dělení paměti, nevýhody, umisťování procesů.",
      "options": {
        "a": "• Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace)\n• Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá\nspráva paměti -> nutná defragmentace",
        "b": "• Paměť je rozdělena do pevně velkých oddílů (stejné/různé velikosti)\n• Stejně velké oblasti:\n◦ Proces je zaveden do libovolného volného oddílu\n◦ Vnitřní fragmentace, neefektivní využití přidělené paměti\n• Různě velké oblasti:\n◦ Více samostatných front podle velikosti oddílu (menší vnitřní fragmentace,\nale možná blokace procesů, které mohl běžet ve větší volné oblasti)\n◦ Jedna společné fronta s best-fit alg. (rychlejší, ale větší vnitřní fragmentace)",
        "c": "• First Fit = první dostatečně velké bloky\n• Best Fit = nejmenší vhodný blok\n• Worst Fit = největší volný blok\n• Next Fit = prohledává paměť od oblasti, kam se naposledy umisťovalo (nejrychlejší)",
        "d": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy"
      },
      "correct": "b",
      "correct_answer": "• Paměť je rozdělena do pevně velkých oddílů (stejné/různé velikosti)\n• Stejně velké oblasti:\n◦ Proces je zaveden do libovolného volného oddílu\n◦ Vnitřní fragmentace, neefektivní využití přidělené paměti\n• Různě velké oblasti:\n◦ Více samostatných front podle velikosti oddílu (menší vnitřní fragmentace,\nale možná blokace procesů, které mohl běžet ve větší volné oblasti)\n◦ Jedna společné fronta s best-fit alg. (rychlejší, ale větší vnitřní fragmentace)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Paměť je rozdělena do pevně velkých oddílů (stejné/různé velikosti) • Stejně velké oblasti: ◦ Proces je zaveden do libovolného volného oddílu ◦ Vnitřní fragmentace, neefektivní využití přidělené paměti • Různě velké oblasti: ◦ Více samostatných front podle velikosti oddílu (menší vnitřní fragmentace, ale možná blokace procesů, které mohl běžet ve větší… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-12-03",
        "b": "bosys-12-02",
        "c": "bosys-12-04",
        "d": "bosys-12-01"
      },
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-12-03",
      "source_card_id": "bosys-12-03",
      "stable_id": "e24cc7d9",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Dynamické dělení paměti, nevýhody.",
      "options": {
        "a": "• Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace)\n• Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá\nspráva paměti -> nutná defragmentace",
        "b": "• First Fit = první dostatečně velké bloky\n• Best Fit = nejmenší vhodný blok\n• Worst Fit = největší volný blok\n• Next Fit = prohledává paměť od oblasti, kam se naposledy umisťovalo (nejrychlejší)",
        "c": "• Paměť je rozdělena do pevně velkých oddílů (stejné/různé velikosti)\n• Stejně velké oblasti:\n◦ Proces je zaveden do libovolného volného oddílu\n◦ Vnitřní fragmentace, neefektivní využití přidělené paměti\n• Různě velké oblasti:\n◦ Více samostatných front podle velikosti oddílu (menší vnitřní fragmentace,\nale možná blokace procesů, které mohl běžet ve větší volné oblasti)\n◦ Jedna společné fronta s best-fit alg. (rychlejší, ale větší vnitřní fragmentace)",
        "d": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy"
      },
      "correct": "a",
      "correct_answer": "• Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace)\n• Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá\nspráva paměti -> nutná defragmentace",
      "explanation": "Správná možnost odpovídá původní kartičce: • Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace) • Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá správa paměti -> nutná defragmentace Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-12-03",
        "b": "bosys-12-04",
        "c": "bosys-12-02",
        "d": "bosys-12-01"
      },
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-12-04",
      "source_card_id": "bosys-12-04",
      "stable_id": "f31f16cb",
      "section_index": 12,
      "section": "Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti (fixed partitioning, variable partitioning), fragmentace paměti, typy fragmentace, umisťovací algoritmy.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Umisťovací algoritmy pro dynamické dělení paměti (s popisem).",
      "options": {
        "a": "• Procesům se alokuje přesně tak velká oblast, jakou potřebují (žádná vnitřní fragmentace)\n• Nevýhody = po uvolnění procesů mohou vzniknout díry -> vnější fragmentace, složitá\nspráva paměti -> nutná defragmentace",
        "b": "• Relokace paměti = možnost umístění paměti procesu na libovolné fyzické adresy\n• Ochrana paměti = procesu je dovoleno měnit pouze jemu přidělenou paměť\n• Možnost sdílení paměti mezi procesy",
        "c": "• Paměť je rozdělena do pevně velkých oddílů (stejné/různé velikosti)\n• Stejně velké oblasti:\n◦ Proces je zaveden do libovolného volného oddílu\n◦ Vnitřní fragmentace, neefektivní využití přidělené paměti\n• Různě velké oblasti:\n◦ Více samostatných front podle velikosti oddílu (menší vnitřní fragmentace,\nale možná blokace procesů, které mohl běžet ve větší volné oblasti)\n◦ Jedna společné fronta s best-fit alg. (rychlejší, ale větší vnitřní fragmentace)",
        "d": "• First Fit = první dostatečně velké bloky\n• Best Fit = nejmenší vhodný blok\n• Worst Fit = největší volný blok\n• Next Fit = prohledává paměť od oblasti, kam se naposledy umisťovalo (nejrychlejší)"
      },
      "correct": "d",
      "correct_answer": "• First Fit = první dostatečně velké bloky\n• Best Fit = nejmenší vhodný blok\n• Worst Fit = největší volný blok\n• Next Fit = prohledává paměť od oblasti, kam se naposledy umisťovalo (nejrychlejší)",
      "explanation": "Správná možnost odpovídá původní kartičce: • First Fit = první dostatečně velké bloky • Best Fit = nejmenší vhodný blok • Worst Fit = největší volný blok • Next Fit = prohledává paměť od oblasti, kam se naposledy umisťovalo (nejrychlejší) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-12-03",
        "b": "bosys-12-01",
        "c": "bosys-12-02",
        "d": "bosys-12-04"
      },
      "tags": [
        "BOSYS",
        "sekce-12",
        "pozadavky-na-pamet-alokace-adresovani-pevne-staticke-a",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-13-01",
      "source_card_id": "bosys-13-01",
      "stable_id": "853be212",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Možná řešení nedostatku RAM (s vysvětlením principu).",
      "options": {
        "a": "• Proces má tendenci přistupovat do stejné paměťové oblasti\n• Časová lokalita = proces často přistupuje ke stejné adrese\n• Prostorová lokalita = proces přistupuje k adresám blízko nedávno použitým",
        "b": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap",
        "c": "• Příliš časté page-faulty a swap-in/swap-out operace místo výpočtů\n• Příčiny = Nedostatek RAM, špatná organizace RAM, neoptimalizovaný kód",
        "d": "• Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno\n• Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární"
      },
      "correct": "b",
      "correct_answer": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap",
      "explanation": "Správná možnost odpovídá původní kartičce: • Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze ten, který se vykonává, ostatní se překryjí • Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější sekundární paměť -> swap Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-13-05",
        "b": "bosys-13-01",
        "c": "bosys-13-06",
        "d": "bosys-13-02"
      },
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na",
        "abcd-test"
      ],
      "points_hint": "2 + 2"
    },
    {
      "id": "bosys-abcd-13-02",
      "source_card_id": "bosys-13-02",
      "stable_id": "91a28f73",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Virtualizace paměti: definice a HW podpora.",
      "options": {
        "a": "• Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno\n• Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární",
        "b": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n◦ Možnost využít sekundární paměť jako rozšíření RAM\n◦ Nutnost řešit page-fault a výběry stránek\n◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
        "c": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap",
        "d": "• Proces má tendenci přistupovat do stejné paměťové oblasti\n• Časová lokalita = proces často přistupuje ke stejné adrese\n• Prostorová lokalita = proces přistupuje k adresám blízko nedávno použitým"
      },
      "correct": "a",
      "correct_answer": "• Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno\n• Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární",
      "explanation": "Správná možnost odpovídá původní kartičce: • Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno • Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-13-02",
        "b": "bosys-13-03",
        "c": "bosys-13-01",
        "d": "bosys-13-05"
      },
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-13-03",
      "source_card_id": "bosys-13-03",
      "stable_id": "e39724a6",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Virtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).",
      "options": {
        "a": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap",
        "b": "• Proces má tendenci přistupovat do stejné paměťové oblasti\n• Časová lokalita = proces často přistupuje ke stejné adrese\n• Prostorová lokalita = proces přistupuje k adresám blízko nedávno použitým",
        "c": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n◦ Možnost využít sekundární paměť jako rozšíření RAM\n◦ Nutnost řešit page-fault a výběry stránek\n◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
        "d": "• Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno\n• Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární"
      },
      "correct": "c",
      "correct_answer": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n◦ Možnost využít sekundární paměť jako rozšíření RAM\n◦ Nutnost řešit page-fault a výběry stránek\n◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
      "explanation": "Správná možnost odpovídá původní kartičce: • Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické Virtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší). • Motivace: ◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM ◦ izolace procesů, každý pracuje ve vlastním adresovém… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-13-01",
        "b": "bosys-13-05",
        "c": "bosys-13-03",
        "d": "bosys-13-02"
      },
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-13-04",
      "source_card_id": "bosys-13-04",
      "stable_id": "cce6100a",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Virtualizace paměti: pojmy (RS, S).",
      "options": {
        "a": "• Příliš časté page-faulty a swap-in/swap-out operace místo výpočtů\n• Příčiny = Nedostatek RAM, špatná organizace RAM, neoptimalizovaný kód",
        "b": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n◦ Možnost využít sekundární paměť jako rozšíření RAM\n◦ Nutnost řešit page-fault a výběry stránek\n◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
        "c": "• Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno\n• Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární",
        "d": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap"
      },
      "correct": "b",
      "correct_answer": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n◦ Možnost využít sekundární paměť jako rozšíření RAM\n◦ Nutnost řešit page-fault a výběry stránek\n◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
      "explanation": "Správná možnost odpovídá původní kartičce: • Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické Virtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší). • Motivace: ◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM ◦ izolace procesů, každý pracuje ve vlastním adresovém… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-13-06",
        "b": "bosys-13-04",
        "c": "bosys-13-02",
        "d": "bosys-13-01"
      },
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-13-05",
      "source_card_id": "bosys-13-05",
      "stable_id": "bc4599c6",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Princip lokality odkazů.",
      "options": {
        "a": "• Proces má tendenci přistupovat do stejné paměťové oblasti\n• Časová lokalita = proces často přistupuje ke stejné adrese\n• Prostorová lokalita = proces přistupuje k adresám blízko nedávno použitým",
        "b": "• Příliš časté page-faulty a swap-in/swap-out operace místo výpočtů\n• Příčiny = Nedostatek RAM, špatná organizace RAM, neoptimalizovaný kód",
        "c": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap",
        "d": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n◦ Možnost využít sekundární paměť jako rozšíření RAM\n◦ Nutnost řešit page-fault a výběry stránek\n◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů"
      },
      "correct": "a",
      "correct_answer": "• Proces má tendenci přistupovat do stejné paměťové oblasti\n• Časová lokalita = proces často přistupuje ke stejné adrese\n• Prostorová lokalita = proces přistupuje k adresám blízko nedávno použitým",
      "explanation": "Správná možnost odpovídá původní kartičce: • Proces má tendenci přistupovat do stejné paměťové oblasti • Časová lokalita = proces často přistupuje ke stejné adrese • Prostorová lokalita = proces přistupuje k adresám blízko nedávno použitým Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-13-05",
        "b": "bosys-13-06",
        "c": "bosys-13-01",
        "d": "bosys-13-03"
      },
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-13-06",
      "source_card_id": "bosys-13-06",
      "stable_id": "33b33e46",
      "section_index": 13,
      "section": "Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Thrashing – definice a příčiny.",
      "options": {
        "a": "• Podpora: MMU (Memory Management Unit) = překlad virtuálních adres na fyzické\nVirtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).\n• Motivace:\n◦ Možnost spustit více procesů, než by se fyzicky vešlo do RAM\n◦ izolace procesů, každý pracuje ve vlastním adresovém prostoru\n• Důsledky:\n◦ Možnost využít sekundární paměť jako rozšíření RAM\n◦ Nutnost řešit page-fault a výběry stránek\n◦ Page-fault -> výjimka vyvolaná MMU, když přistupujeme k paměťové stránce bez přípravy\n• Princip fungování:\n◦ Většina přístupů se děje do resident set -> do stránek právě v RAM\n◦ Díky principu lokalit jsou page-faulty relativně vzácné\nVirtualizace paměti: pojmy (RS, S).\n• RS (resident set) = množina stránek procesů aktuálně přítomné ve fyzické RAM\n• S (swap area) = prostor na disku vyhrazený pro odkládání (dočasně) nevyužívaných\nčásti adresního prostoru procesů",
        "b": "• Překrývání (overlaying) = program se rozdělí na nezávislé moduly, v paměti je vždy pouze\nten, který se vykonává, ostatní se překryjí\n• Odkládání (swaping) = je-li potřeba uvolnit paměť, odloží se některé procesy na levnější\nsekundární paměť -> swap",
        "c": "• Příliš časté page-faulty a swap-in/swap-out operace místo výpočtů\n• Příčiny = Nedostatek RAM, špatná organizace RAM, neoptimalizovaný kód",
        "d": "• Procesor je obvykle schopen adresovat větší množství paměti, než je skutečně instalováno\n• Lze rozšířit adresový prostor tak, aby zahrnoval kromě fyzické paměti také část sekundární"
      },
      "correct": "c",
      "correct_answer": "• Příliš časté page-faulty a swap-in/swap-out operace místo výpočtů\n• Příčiny = Nedostatek RAM, špatná organizace RAM, neoptimalizovaný kód",
      "explanation": "Správná možnost odpovídá původní kartičce: • Příliš časté page-faulty a swap-in/swap-out operace místo výpočtů • Příčiny = Nedostatek RAM, špatná organizace RAM, neoptimalizovaný kód Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-13-04",
        "b": "bosys-13-01",
        "c": "bosys-13-06",
        "d": "bosys-13-02"
      },
      "tags": [
        "BOSYS",
        "sekce-13",
        "problem-nedostatku-operacni-pameti-odkladani-obsahu-pameti-na",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-14-01",
      "source_card_id": "bosys-14-01",
      "stable_id": "b6839ea6",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Princip, vlastnosti (spojitost, fragmentace, sdílení).",
      "options": {
        "a": "Princip stránkování = rozdělení fyzické RAM na stejné bloky – rámce (frames)\n• Spojitost:\n◦ Proces vnímá souvislý lineární prostor\n◦ Stránky jsou však rozmístěny nesouvisle po rámcích (žádná vnější fragmentace)\n• Fragmentace:\n◦ Vnitřní -> nevyužití části přidělené paměti\n◦ Vnější -> díry v paměti po uvolnění procesu (odstraněná)\n• Sdílení:\n◦ Procesy mohou mít ve svých tabulkách stejné číslo rámce pro stránky\nspolečných kódu či dat -> šetření RAM",
        "b": "• Víceúrovňové tabulky = stránkové tabulky alokují pouze potřebné části\n• Invertované tabulky = indexuje místo stránek rámce, velikost závisí na fyzické paměti\n• TLB (Translation Lookaside Buffer) = speciální rychlá cache v CPU\n→ ukládá nejčastěji používané překlady VA na FA",
        "c": "• Malé stránky =více položek ve stránkové tabulce (menší vnitřní fragmentace, větší režie)\n• Velké stránky =méně položek ve stránkové tabulce (větší vnitřní fragmentace, menší režie)\n• Volíme co nejmenší stránku",
        "d": "• Každá adresa v lineárním adresovém prostoru je složena z čísla stránky a offsetu\n• Číslo stránky je indexem do stránkové tabulky\n• Fyzickou adresu lze získat z čísla rámce v tabulce a offsetu ve stránce\n• Rámce jsou stejně velké jako stránky = offset zůstává nezměněný\n→ ve výsledné adrese tedy dojde k nahrazení čísla stránky číslem rámce\n• Převod:\n◦ Dolních 12 bitů = offset\n◦ Horních 20 bitů = číslo stránky\n◦ Virt. Adresa => číslo stránky + offset\n◦ Fyz. Adresa => číslo rámce + offset"
      },
      "correct": "a",
      "correct_answer": "Princip stránkování = rozdělení fyzické RAM na stejné bloky – rámce (frames)\n• Spojitost:\n◦ Proces vnímá souvislý lineární prostor\n◦ Stránky jsou však rozmístěny nesouvisle po rámcích (žádná vnější fragmentace)\n• Fragmentace:\n◦ Vnitřní -> nevyužití části přidělené paměti\n◦ Vnější -> díry v paměti po uvolnění procesu (odstraněná)\n• Sdílení:\n◦ Procesy mohou mít ve svých tabulkách stejné číslo rámce pro stránky\nspolečných kódu či dat -> šetření RAM",
      "explanation": "Správná možnost odpovídá původní kartičce: Princip stránkování = rozdělení fyzické RAM na stejné bloky – rámce (frames) • Spojitost: ◦ Proces vnímá souvislý lineární prostor ◦ Stránky jsou však rozmístěny nesouvisle po rámcích (žádná vnější fragmentace) • Fragmentace: ◦ Vnitřní -> nevyužití části přidělené paměti ◦ Vnější -> díry v paměti po uvolnění procesu (odstraněná) • Sdílení: ◦ Procesy mohou… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-14-01",
        "b": "bosys-14-04",
        "c": "bosys-14-03",
        "d": "bosys-14-02"
      },
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-14-02",
      "source_card_id": "bosys-14-02",
      "stable_id": "46673c21",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Stránkové tabulky, převod adresy.",
      "options": {
        "a": "• Víceúrovňové tabulky = stránkové tabulky alokují pouze potřebné části\n• Invertované tabulky = indexuje místo stránek rámce, velikost závisí na fyzické paměti\n• TLB (Translation Lookaside Buffer) = speciální rychlá cache v CPU\n→ ukládá nejčastěji používané překlady VA na FA",
        "b": "• Každá adresa v lineárním adresovém prostoru je složena z čísla stránky a offsetu\n• Číslo stránky je indexem do stránkové tabulky\n• Fyzickou adresu lze získat z čísla rámce v tabulce a offsetu ve stránce\n• Rámce jsou stejně velké jako stránky = offset zůstává nezměněný\n→ ve výsledné adrese tedy dojde k nahrazení čísla stránky číslem rámce\n• Převod:\n◦ Dolních 12 bitů = offset\n◦ Horních 20 bitů = číslo stránky\n◦ Virt. Adresa => číslo stránky + offset\n◦ Fyz. Adresa => číslo rámce + offset",
        "c": "Princip stránkování = rozdělení fyzické RAM na stejné bloky – rámce (frames)\n• Spojitost:\n◦ Proces vnímá souvislý lineární prostor\n◦ Stránky jsou však rozmístěny nesouvisle po rámcích (žádná vnější fragmentace)\n• Fragmentace:\n◦ Vnitřní -> nevyužití části přidělené paměti\n◦ Vnější -> díry v paměti po uvolnění procesu (odstraněná)\n• Sdílení:\n◦ Procesy mohou mít ve svých tabulkách stejné číslo rámce pro stránky\nspolečných kódu či dat -> šetření RAM",
        "d": "• Malé stránky =více položek ve stránkové tabulce (menší vnitřní fragmentace, větší režie)\n• Velké stránky =méně položek ve stránkové tabulce (větší vnitřní fragmentace, menší režie)\n• Volíme co nejmenší stránku"
      },
      "correct": "b",
      "correct_answer": "• Každá adresa v lineárním adresovém prostoru je složena z čísla stránky a offsetu\n• Číslo stránky je indexem do stránkové tabulky\n• Fyzickou adresu lze získat z čísla rámce v tabulce a offsetu ve stránce\n• Rámce jsou stejně velké jako stránky = offset zůstává nezměněný\n→ ve výsledné adrese tedy dojde k nahrazení čísla stránky číslem rámce\n• Převod:\n◦ Dolních 12 bitů = offset\n◦ Horních 20 bitů = číslo stránky\n◦ Virt. Adresa => číslo stránky + offset\n◦ Fyz. Adresa => číslo rámce + offset",
      "explanation": "Správná možnost odpovídá původní kartičce: • Každá adresa v lineárním adresovém prostoru je složena z čísla stránky a offsetu • Číslo stránky je indexem do stránkové tabulky • Fyzickou adresu lze získat z čísla rámce v tabulce a offsetu ve stránce • Rámce jsou stejně velké jako stránky = offset zůstává nezměněný → ve výsledné adrese tedy dojde k nahrazení čísla stránky číslem rámce • Převod: ◦… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-14-04",
        "b": "bosys-14-02",
        "c": "bosys-14-01",
        "d": "bosys-14-03"
      },
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-14-03",
      "source_card_id": "bosys-14-03",
      "stable_id": "e12261c4",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Volba velikosti stránky a důsledky.",
      "options": {
        "a": "• Víceúrovňové tabulky = stránkové tabulky alokují pouze potřebné části\n• Invertované tabulky = indexuje místo stránek rámce, velikost závisí na fyzické paměti\n• TLB (Translation Lookaside Buffer) = speciální rychlá cache v CPU\n→ ukládá nejčastěji používané překlady VA na FA",
        "b": "• Každá adresa v lineárním adresovém prostoru je složena z čísla stránky a offsetu\n• Číslo stránky je indexem do stránkové tabulky\n• Fyzickou adresu lze získat z čísla rámce v tabulce a offsetu ve stránce\n• Rámce jsou stejně velké jako stránky = offset zůstává nezměněný\n→ ve výsledné adrese tedy dojde k nahrazení čísla stránky číslem rámce\n• Převod:\n◦ Dolních 12 bitů = offset\n◦ Horních 20 bitů = číslo stránky\n◦ Virt. Adresa => číslo stránky + offset\n◦ Fyz. Adresa => číslo rámce + offset",
        "c": "Princip stránkování = rozdělení fyzické RAM na stejné bloky – rámce (frames)\n• Spojitost:\n◦ Proces vnímá souvislý lineární prostor\n◦ Stránky jsou však rozmístěny nesouvisle po rámcích (žádná vnější fragmentace)\n• Fragmentace:\n◦ Vnitřní -> nevyužití části přidělené paměti\n◦ Vnější -> díry v paměti po uvolnění procesu (odstraněná)\n• Sdílení:\n◦ Procesy mohou mít ve svých tabulkách stejné číslo rámce pro stránky\nspolečných kódu či dat -> šetření RAM",
        "d": "• Malé stránky =více položek ve stránkové tabulce (menší vnitřní fragmentace, větší režie)\n• Velké stránky =méně položek ve stránkové tabulce (větší vnitřní fragmentace, menší režie)\n• Volíme co nejmenší stránku"
      },
      "correct": "d",
      "correct_answer": "• Malé stránky =více položek ve stránkové tabulce (menší vnitřní fragmentace, větší režie)\n• Velké stránky =méně položek ve stránkové tabulce (větší vnitřní fragmentace, menší režie)\n• Volíme co nejmenší stránku",
      "explanation": "Správná možnost odpovídá původní kartičce: • Malé stránky =více položek ve stránkové tabulce (menší vnitřní fragmentace, větší režie) • Velké stránky =méně položek ve stránkové tabulce (větší vnitřní fragmentace, menší režie) • Volíme co nejmenší stránku Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-14-04",
        "b": "bosys-14-02",
        "c": "bosys-14-01",
        "d": "bosys-14-03"
      },
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-14-04",
      "source_card_id": "bosys-14-04",
      "stable_id": "9bf42f35",
      "section_index": 14,
      "section": "Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Řešení rozsáhlosti stránkových tabulek, TLB.",
      "options": {
        "a": "• Každá adresa v lineárním adresovém prostoru je složena z čísla stránky a offsetu\n• Číslo stránky je indexem do stránkové tabulky\n• Fyzickou adresu lze získat z čísla rámce v tabulce a offsetu ve stránce\n• Rámce jsou stejně velké jako stránky = offset zůstává nezměněný\n→ ve výsledné adrese tedy dojde k nahrazení čísla stránky číslem rámce\n• Převod:\n◦ Dolních 12 bitů = offset\n◦ Horních 20 bitů = číslo stránky\n◦ Virt. Adresa => číslo stránky + offset\n◦ Fyz. Adresa => číslo rámce + offset",
        "b": "• Malé stránky =více položek ve stránkové tabulce (menší vnitřní fragmentace, větší režie)\n• Velké stránky =méně položek ve stránkové tabulce (větší vnitřní fragmentace, menší režie)\n• Volíme co nejmenší stránku",
        "c": "Princip stránkování = rozdělení fyzické RAM na stejné bloky – rámce (frames)\n• Spojitost:\n◦ Proces vnímá souvislý lineární prostor\n◦ Stránky jsou však rozmístěny nesouvisle po rámcích (žádná vnější fragmentace)\n• Fragmentace:\n◦ Vnitřní -> nevyužití části přidělené paměti\n◦ Vnější -> díry v paměti po uvolnění procesu (odstraněná)\n• Sdílení:\n◦ Procesy mohou mít ve svých tabulkách stejné číslo rámce pro stránky\nspolečných kódu či dat -> šetření RAM",
        "d": "• Víceúrovňové tabulky = stránkové tabulky alokují pouze potřebné části\n• Invertované tabulky = indexuje místo stránek rámce, velikost závisí na fyzické paměti\n• TLB (Translation Lookaside Buffer) = speciální rychlá cache v CPU\n→ ukládá nejčastěji používané překlady VA na FA"
      },
      "correct": "d",
      "correct_answer": "• Víceúrovňové tabulky = stránkové tabulky alokují pouze potřebné části\n• Invertované tabulky = indexuje místo stránek rámce, velikost závisí na fyzické paměti\n• TLB (Translation Lookaside Buffer) = speciální rychlá cache v CPU\n→ ukládá nejčastěji používané překlady VA na FA",
      "explanation": "Správná možnost odpovídá původní kartičce: • Víceúrovňové tabulky = stránkové tabulky alokují pouze potřebné části • Invertované tabulky = indexuje místo stránek rámce, velikost závisí na fyzické paměti • TLB (Translation Lookaside Buffer) = speciální rychlá cache v CPU → ukládá nejčastěji používané překlady VA na FA Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-14-02",
        "b": "bosys-14-03",
        "c": "bosys-14-01",
        "d": "bosys-14-04"
      },
      "tags": [
        "BOSYS",
        "sekce-14",
        "strankovani-pameti-prevod-adresy-vlastnosti-strankovani-sdileni-stranek",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-15-01",
      "source_card_id": "bosys-15-01",
      "stable_id": "0acaa30c",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Důležité řídicí bity ve stránkové tabulce (z hlediska využívání algoritmy nahrazování) a jejich význam.",
      "options": {
        "a": "• Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu\n• Na vyžádání (demand paging) = načítání stránek až při potřebě\n• Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství",
        "b": "• Určuje, které upravené stránky se uloží na disk\n• Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba\n◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení)\n• Precleaning = periodické ukládání stránek v dávce\n◦ procesy čekají pouze na čtení\n◦ Používá např. alg. Page-buffering",
        "c": "• Přístupový (Accessed) = indikuje, zda byla stránka během určité doby použita\n• Změněný (Dirty) = indikuje, zda byla stránka změněna od zapsání do fyzické paměti\n• Přítomnost (Present) = indikuje, zda je stránka právě načtena do fyzické paměti\n• Oprávnění (Read/Write) = indikuje, zda je stránka určena pouze pro čtení, nebo i pro zápis",
        "d": "• Odložení stránky na disk, je-li třeba načíst do RAM jiné stránky, pro které by nebylo místo\n• FIFO = nahrazuje stránku, které je v paměti nejdéle\n• LRU (Least Recently Used) = nahrazuje stránku, která nebyla nejdéle použita\n• NRU (Not Recently Used) = nahrazuje stránku podle příznaků použití a změny\n• Second Chance = modifikace FIFO s využitím příznaku použití, kdy použitá stránka\nje s nulovým příznakem použití zařazena na konec fronty\n• Clock = kruhová varianta Second Chance, pointer skenuje stránky, až najde nulový\npříznak použití"
      },
      "correct": "c",
      "correct_answer": "• Přístupový (Accessed) = indikuje, zda byla stránka během určité doby použita\n• Změněný (Dirty) = indikuje, zda byla stránka změněna od zapsání do fyzické paměti\n• Přítomnost (Present) = indikuje, zda je stránka právě načtena do fyzické paměti\n• Oprávnění (Read/Write) = indikuje, zda je stránka určena pouze pro čtení, nebo i pro zápis",
      "explanation": "Správná možnost odpovídá původní kartičce: • Přístupový (Accessed) = indikuje, zda byla stránka během určité doby použita • Změněný (Dirty) = indikuje, zda byla stránka změněna od zapsání do fyzické paměti • Přítomnost (Present) = indikuje, zda je stránka právě načtena do fyzické paměti • Oprávnění (Read/Write) = indikuje, zda je stránka určena pouze pro čtení, nebo i pro zápis Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-15-02",
        "b": "bosys-15-05",
        "c": "bosys-15-01",
        "d": "bosys-15-04"
      },
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-15-02",
      "source_card_id": "bosys-15-02",
      "stable_id": "114bff61",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Strategie zavádění stránek: účel, algoritmy.",
      "options": {
        "a": "• Určuje, které upravené stránky se uloží na disk\n• Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba\n◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení)\n• Precleaning = periodické ukládání stránek v dávce\n◦ procesy čekají pouze na čtení\n◦ Používá např. alg. Page-buffering",
        "b": "//PŘEZKOUMAT\n• Ovlivňuje počet page faultů a výkon procesu\n• Příliš malý RS -> thrashing\n• Příliš velký RS -> neefektivní využití paměti",
        "c": "• Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu\n• Na vyžádání (demand paging) = načítání stránek až při potřebě\n• Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství",
        "d": "• Určuje, kam se nově načtená stránka uloží\n• První volný rámec (First fit) = do první volné fyzické stránky\n• Nejlepší vhodný rámec (Best fit) = stránka nejlépe odpovídající požadavku\n• Náhodné umístění (Random placement) = náhodně vybere fyzickou stránku"
      },
      "correct": "c",
      "correct_answer": "• Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu\n• Na vyžádání (demand paging) = načítání stránek až při potřebě\n• Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství",
      "explanation": "Správná možnost odpovídá původní kartičce: • Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu • Na vyžádání (demand paging) = načítání stránek až při potřebě • Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-15-05",
        "b": "bosys-15-06",
        "c": "bosys-15-02",
        "d": "bosys-15-03"
      },
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-15-03",
      "source_card_id": "bosys-15-03",
      "stable_id": "e6aef817",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Strategie umisťování stránek: účel, algoritmy.",
      "options": {
        "a": "• Odložení stránky na disk, je-li třeba načíst do RAM jiné stránky, pro které by nebylo místo\n• FIFO = nahrazuje stránku, které je v paměti nejdéle\n• LRU (Least Recently Used) = nahrazuje stránku, která nebyla nejdéle použita\n• NRU (Not Recently Used) = nahrazuje stránku podle příznaků použití a změny\n• Second Chance = modifikace FIFO s využitím příznaku použití, kdy použitá stránka\nje s nulovým příznakem použití zařazena na konec fronty\n• Clock = kruhová varianta Second Chance, pointer skenuje stránky, až najde nulový\npříznak použití",
        "b": "• Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu\n• Na vyžádání (demand paging) = načítání stránek až při potřebě\n• Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství",
        "c": "• Určuje, kam se nově načtená stránka uloží\n• První volný rámec (First fit) = do první volné fyzické stránky\n• Nejlepší vhodný rámec (Best fit) = stránka nejlépe odpovídající požadavku\n• Náhodné umístění (Random placement) = náhodně vybere fyzickou stránku",
        "d": "• Určuje, které upravené stránky se uloží na disk\n• Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba\n◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení)\n• Precleaning = periodické ukládání stránek v dávce\n◦ procesy čekají pouze na čtení\n◦ Používá např. alg. Page-buffering"
      },
      "correct": "c",
      "correct_answer": "• Určuje, kam se nově načtená stránka uloží\n• První volný rámec (First fit) = do první volné fyzické stránky\n• Nejlepší vhodný rámec (Best fit) = stránka nejlépe odpovídající požadavku\n• Náhodné umístění (Random placement) = náhodně vybere fyzickou stránku",
      "explanation": "Správná možnost odpovídá původní kartičce: • Určuje, kam se nově načtená stránka uloží • První volný rámec (First fit) = do první volné fyzické stránky • Nejlepší vhodný rámec (Best fit) = stránka nejlépe odpovídající požadavku • Náhodné umístění (Random placement) = náhodně vybere fyzickou stránku Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-15-04",
        "b": "bosys-15-02",
        "c": "bosys-15-03",
        "d": "bosys-15-05"
      },
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-15-04",
      "source_card_id": "bosys-15-04",
      "stable_id": "cca32257",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Strategie nahrazování stránek: účel, algoritmy.",
      "options": {
        "a": "• Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu\n• Na vyžádání (demand paging) = načítání stránek až při potřebě\n• Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství",
        "b": "• Určuje, kam se nově načtená stránka uloží\n• První volný rámec (First fit) = do první volné fyzické stránky\n• Nejlepší vhodný rámec (Best fit) = stránka nejlépe odpovídající požadavku\n• Náhodné umístění (Random placement) = náhodně vybere fyzickou stránku",
        "c": "//PŘEZKOUMAT\n• Ovlivňuje počet page faultů a výkon procesu\n• Příliš malý RS -> thrashing\n• Příliš velký RS -> neefektivní využití paměti",
        "d": "• Odložení stránky na disk, je-li třeba načíst do RAM jiné stránky, pro které by nebylo místo\n• FIFO = nahrazuje stránku, které je v paměti nejdéle\n• LRU (Least Recently Used) = nahrazuje stránku, která nebyla nejdéle použita\n• NRU (Not Recently Used) = nahrazuje stránku podle příznaků použití a změny\n• Second Chance = modifikace FIFO s využitím příznaku použití, kdy použitá stránka\nje s nulovým příznakem použití zařazena na konec fronty\n• Clock = kruhová varianta Second Chance, pointer skenuje stránky, až najde nulový\npříznak použití"
      },
      "correct": "d",
      "correct_answer": "• Odložení stránky na disk, je-li třeba načíst do RAM jiné stránky, pro které by nebylo místo\n• FIFO = nahrazuje stránku, které je v paměti nejdéle\n• LRU (Least Recently Used) = nahrazuje stránku, která nebyla nejdéle použita\n• NRU (Not Recently Used) = nahrazuje stránku podle příznaků použití a změny\n• Second Chance = modifikace FIFO s využitím příznaku použití, kdy použitá stránka\nje s nulovým příznakem použití zařazena na konec fronty\n• Clock = kruhová varianta Second Chance, pointer skenuje stránky, až najde nulový\npříznak použití",
      "explanation": "Správná možnost odpovídá původní kartičce: • Odložení stránky na disk, je-li třeba načíst do RAM jiné stránky, pro které by nebylo místo • FIFO = nahrazuje stránku, které je v paměti nejdéle • LRU (Least Recently Used) = nahrazuje stránku, která nebyla nejdéle použita • NRU (Not Recently Used) = nahrazuje stránku podle příznaků použití a změny • Second Chance = modifikace FIFO s využitím příznaku… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-15-02",
        "b": "bosys-15-03",
        "c": "bosys-15-06",
        "d": "bosys-15-04"
      },
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-15-05",
      "source_card_id": "bosys-15-05",
      "stable_id": "f958276f",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Strategie uklízení (čištění) stránek: účel, algoritmy.",
      "options": {
        "a": "• Odložení stránky na disk, je-li třeba načíst do RAM jiné stránky, pro které by nebylo místo\n• FIFO = nahrazuje stránku, které je v paměti nejdéle\n• LRU (Least Recently Used) = nahrazuje stránku, která nebyla nejdéle použita\n• NRU (Not Recently Used) = nahrazuje stránku podle příznaků použití a změny\n• Second Chance = modifikace FIFO s využitím příznaku použití, kdy použitá stránka\nje s nulovým příznakem použití zařazena na konec fronty\n• Clock = kruhová varianta Second Chance, pointer skenuje stránky, až najde nulový\npříznak použití",
        "b": "• Určuje, které upravené stránky se uloží na disk\n• Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba\n◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení)\n• Precleaning = periodické ukládání stránek v dávce\n◦ procesy čekají pouze na čtení\n◦ Používá např. alg. Page-buffering",
        "c": "• Určuje, kam se nově načtená stránka uloží\n• První volný rámec (First fit) = do první volné fyzické stránky\n• Nejlepší vhodný rámec (Best fit) = stránka nejlépe odpovídající požadavku\n• Náhodné umístění (Random placement) = náhodně vybere fyzickou stránku",
        "d": "• Přístupový (Accessed) = indikuje, zda byla stránka během určité doby použita\n• Změněný (Dirty) = indikuje, zda byla stránka změněna od zapsání do fyzické paměti\n• Přítomnost (Present) = indikuje, zda je stránka právě načtena do fyzické paměti\n• Oprávnění (Read/Write) = indikuje, zda je stránka určena pouze pro čtení, nebo i pro zápis"
      },
      "correct": "b",
      "correct_answer": "• Určuje, které upravené stránky se uloží na disk\n• Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba\n◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení)\n• Precleaning = periodické ukládání stránek v dávce\n◦ procesy čekají pouze na čtení\n◦ Používá např. alg. Page-buffering",
      "explanation": "Správná možnost odpovídá původní kartičce: • Určuje, které upravené stránky se uloží na disk • Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba ◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení) • Precleaning = periodické ukládání stránek v dávce ◦ procesy čekají pouze na čtení ◦ Používá např. alg. Page-buffering Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-15-04",
        "b": "bosys-15-05",
        "c": "bosys-15-03",
        "d": "bosys-15-01"
      },
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-15-06",
      "source_card_id": "bosys-15-06",
      "stable_id": "cf5690ad",
      "section_index": 15,
      "section": "Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident‑set na běh procesů.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Volba velikosti resident‑set.",
      "options": {
        "a": "• Určuje, kdy a které stránky se mají načíst do fyzické paměti při běhu procesu\n• Na vyžádání (demand paging) = načítání stránek až při potřebě\n• Přednačítání (lookahead paging) = zavádění stránek předem, obvykle ve větším množství",
        "b": "• Přístupový (Accessed) = indikuje, zda byla stránka během určité doby použita\n• Změněný (Dirty) = indikuje, zda byla stránka změněna od zapsání do fyzické paměti\n• Přítomnost (Present) = indikuje, zda je stránka právě načtena do fyzické paměti\n• Oprávnění (Read/Write) = indikuje, zda je stránka určena pouze pro čtení, nebo i pro zápis",
        "c": "• Určuje, které upravené stránky se uloží na disk\n• Demand cleaning = ukládá stránku až v okamžiku, kdy je to potřeba\n◦ procesy čekají na dokončení 2 V-V operací (uložení a načtení)\n• Precleaning = periodické ukládání stránek v dávce\n◦ procesy čekají pouze na čtení\n◦ Používá např. alg. Page-buffering",
        "d": "//PŘEZKOUMAT\n• Ovlivňuje počet page faultů a výkon procesu\n• Příliš malý RS -> thrashing\n• Příliš velký RS -> neefektivní využití paměti"
      },
      "correct": "d",
      "correct_answer": "//PŘEZKOUMAT\n• Ovlivňuje počet page faultů a výkon procesu\n• Příliš malý RS -> thrashing\n• Příliš velký RS -> neefektivní využití paměti",
      "explanation": "Správná možnost odpovídá původní kartičce: //PŘEZKOUMAT • Ovlivňuje počet page faultů a výkon procesu • Příliš malý RS -> thrashing • Příliš velký RS -> neefektivní využití paměti Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-15-02",
        "b": "bosys-15-01",
        "c": "bosys-15-05",
        "d": "bosys-15-06"
      },
      "tags": [
        "BOSYS",
        "sekce-15",
        "ridici-bity-ve-strankovych-tabulkach-strategie-zavadeni-umistovani",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-16-01",
      "source_card_id": "bosys-16-01",
      "stable_id": "6d7b15e4",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Definice systémů RT (pracujících v reálném čase) a jejich správná funkce.",
      "options": {
        "a": "• RTLinux\n• QNX",
        "b": "• Systémy, u kterých kromě správnosti výpočtu záleží i na dodržení časových lhůt\n• Jejich správnost výpočtu je dána správným výsledkem a včasným dodáním",
        "c": "• Hard RT = zameškání termínu = chyba\n• Soft RT = zameškání termínu není fatální, ale snižuje kvalitu\n• Firm RT = lze tolerovat jednorázové zameškání, ale po limitu je výsledek bezcenný",
        "d": "• Latence = doba od příchodu požadavku do začátku provádění obsluhy\n• Odezva = doba, za kterou OS zareaguje na požadavek"
      },
      "correct": "b",
      "correct_answer": "• Systémy, u kterých kromě správnosti výpočtu záleží i na dodržení časových lhůt\n• Jejich správnost výpočtu je dána správným výsledkem a včasným dodáním",
      "explanation": "Správná možnost odpovídá původní kartičce: • Systémy, u kterých kromě správnosti výpočtu záleží i na dodržení časových lhůt • Jejich správnost výpočtu je dána správným výsledkem a včasným dodáním Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-16-04",
        "b": "bosys-16-01",
        "c": "bosys-16-02",
        "d": "bosys-16-05"
      },
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-16-02",
      "source_card_id": "bosys-16-02",
      "stable_id": "e9c0084e",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Rozdělení systémů RT dle dodržování termínů (s popisem).",
      "options": {
        "a": "• Hard RT = zameškání termínu = chyba\n• Soft RT = zameškání termínu není fatální, ale snižuje kvalitu\n• Firm RT = lze tolerovat jednorázové zameškání, ale po limitu je výsledek bezcenný",
        "b": "• RTLinux\n• QNX",
        "c": "• Systémy, u kterých kromě správnosti výpočtu záleží i na dodržení časových lhůt\n• Jejich správnost výpočtu je dána správným výsledkem a včasným dodáním",
        "d": "• Malé rozměry a váha\n• Nízká spotřeba\n• Odolnost\n• Real-time funkce\n• Reaktivita\n• Spolehlivost a bezpečnost\n• Cenová citlivost"
      },
      "correct": "a",
      "correct_answer": "• Hard RT = zameškání termínu = chyba\n• Soft RT = zameškání termínu není fatální, ale snižuje kvalitu\n• Firm RT = lze tolerovat jednorázové zameškání, ale po limitu je výsledek bezcenný",
      "explanation": "Správná možnost odpovídá původní kartičce: • Hard RT = zameškání termínu = chyba • Soft RT = zameškání termínu není fatální, ale snižuje kvalitu • Firm RT = lze tolerovat jednorázové zameškání, ale po limitu je výsledek bezcenný Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-16-02",
        "b": "bosys-16-04",
        "c": "bosys-16-01",
        "d": "bosys-16-07"
      },
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-16-03",
      "source_card_id": "bosys-16-03",
      "stable_id": "8b1e5808",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Charakteristické vlastnosti RTOS.",
      "options": {
        "a": "• Systémy, u kterých kromě správnosti výpočtu záleží i na dodržení časových lhůt\n• Jejich správnost výpočtu je dána správným výsledkem a včasným dodáním",
        "b": "• Subsystémy integrované do větších zařízení\n• Určeny k plnění jedné specifické funkce\n• Mikrovlnky, pračky, routery",
        "c": "• Hard RT = zameškání termínu = chyba\n• Soft RT = zameškání termínu není fatální, ale snižuje kvalitu\n• Firm RT = lze tolerovat jednorázové zameškání, ale po limitu je výsledek bezcenný",
        "d": "• rychlé přepínání kontextu\n• preemptivní plánování založené na prioritách\n• multitasking s komunikací procesů\n• rychlý souborový systém a rychlá komunikace procesů\n• speciální systémové služby (alarm, timeout…)\n• malé rozměry"
      },
      "correct": "d",
      "correct_answer": "• rychlé přepínání kontextu\n• preemptivní plánování založené na prioritách\n• multitasking s komunikací procesů\n• rychlý souborový systém a rychlá komunikace procesů\n• speciální systémové služby (alarm, timeout…)\n• malé rozměry",
      "explanation": "Správná možnost odpovídá původní kartičce: • rychlé přepínání kontextu • preemptivní plánování založené na prioritách • multitasking s komunikací procesů • rychlý souborový systém a rychlá komunikace procesů • speciální systémové služby (alarm, timeout…) • malé rozměry Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-16-01",
        "b": "bosys-16-06",
        "c": "bosys-16-02",
        "d": "bosys-16-03"
      },
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-16-04",
      "source_card_id": "bosys-16-04",
      "stable_id": "13c69e39",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Příklady RTOS (alespoň dva).",
      "options": {
        "a": "• Malé rozměry a váha\n• Nízká spotřeba\n• Odolnost\n• Real-time funkce\n• Reaktivita\n• Spolehlivost a bezpečnost\n• Cenová citlivost",
        "b": "• RTLinux\n• QNX",
        "c": "• Systémy, u kterých kromě správnosti výpočtu záleží i na dodržení časových lhůt\n• Jejich správnost výpočtu je dána správným výsledkem a včasným dodáním",
        "d": "• Latence = doba od příchodu požadavku do začátku provádění obsluhy\n• Odezva = doba, za kterou OS zareaguje na požadavek"
      },
      "correct": "b",
      "correct_answer": "• RTLinux\n• QNX",
      "explanation": "Správná možnost odpovídá původní kartičce: • RTLinux • QNX Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-16-07",
        "b": "bosys-16-04",
        "c": "bosys-16-01",
        "d": "bosys-16-05"
      },
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-16-05",
      "source_card_id": "bosys-16-05",
      "stable_id": "fa064501",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Definice pojmů latence a odezva (na úrovni přerušovacího systému).",
      "options": {
        "a": "• RTLinux\n• QNX",
        "b": "• Malé rozměry a váha\n• Nízká spotřeba\n• Odolnost\n• Real-time funkce\n• Reaktivita\n• Spolehlivost a bezpečnost\n• Cenová citlivost",
        "c": "• rychlé přepínání kontextu\n• preemptivní plánování založené na prioritách\n• multitasking s komunikací procesů\n• rychlý souborový systém a rychlá komunikace procesů\n• speciální systémové služby (alarm, timeout…)\n• malé rozměry",
        "d": "• Latence = doba od příchodu požadavku do začátku provádění obsluhy\n• Odezva = doba, za kterou OS zareaguje na požadavek"
      },
      "correct": "d",
      "correct_answer": "• Latence = doba od příchodu požadavku do začátku provádění obsluhy\n• Odezva = doba, za kterou OS zareaguje na požadavek",
      "explanation": "Správná možnost odpovídá původní kartičce: • Latence = doba od příchodu požadavku do začátku provádění obsluhy • Odezva = doba, za kterou OS zareaguje na požadavek Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-16-04",
        "b": "bosys-16-07",
        "c": "bosys-16-03",
        "d": "bosys-16-05"
      },
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-16-06",
      "source_card_id": "bosys-16-06",
      "stable_id": "849d17b0",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Definice vestavěných systémů.",
      "options": {
        "a": "• Latence = doba od příchodu požadavku do začátku provádění obsluhy\n• Odezva = doba, za kterou OS zareaguje na požadavek",
        "b": "• Malé rozměry a váha\n• Nízká spotřeba\n• Odolnost\n• Real-time funkce\n• Reaktivita\n• Spolehlivost a bezpečnost\n• Cenová citlivost",
        "c": "• rychlé přepínání kontextu\n• preemptivní plánování založené na prioritách\n• multitasking s komunikací procesů\n• rychlý souborový systém a rychlá komunikace procesů\n• speciální systémové služby (alarm, timeout…)\n• malé rozměry",
        "d": "• Subsystémy integrované do větších zařízení\n• Určeny k plnění jedné specifické funkce\n• Mikrovlnky, pračky, routery"
      },
      "correct": "d",
      "correct_answer": "• Subsystémy integrované do větších zařízení\n• Určeny k plnění jedné specifické funkce\n• Mikrovlnky, pračky, routery",
      "explanation": "Správná možnost odpovídá původní kartičce: • Subsystémy integrované do větších zařízení • Určeny k plnění jedné specifické funkce • Mikrovlnky, pračky, routery Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-16-05",
        "b": "bosys-16-07",
        "c": "bosys-16-03",
        "d": "bosys-16-06"
      },
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-16-07",
      "source_card_id": "bosys-16-07",
      "stable_id": "b29b179f",
      "section_index": 16,
      "section": "Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva (na úrovni přerušení); vestavěné systémy, OS pro ně a typické požadavky na ně.",
      "question_index": 7,
      "type": "single_choice_abcd",
      "question": "Typické vlastnosti vestavěných systémů (alespoň šest).",
      "options": {
        "a": "• rychlé přepínání kontextu\n• preemptivní plánování založené na prioritách\n• multitasking s komunikací procesů\n• rychlý souborový systém a rychlá komunikace procesů\n• speciální systémové služby (alarm, timeout…)\n• malé rozměry",
        "b": "• Hard RT = zameškání termínu = chyba\n• Soft RT = zameškání termínu není fatální, ale snižuje kvalitu\n• Firm RT = lze tolerovat jednorázové zameškání, ale po limitu je výsledek bezcenný",
        "c": "• RTLinux\n• QNX",
        "d": "• Malé rozměry a váha\n• Nízká spotřeba\n• Odolnost\n• Real-time funkce\n• Reaktivita\n• Spolehlivost a bezpečnost\n• Cenová citlivost"
      },
      "correct": "d",
      "correct_answer": "• Malé rozměry a váha\n• Nízká spotřeba\n• Odolnost\n• Real-time funkce\n• Reaktivita\n• Spolehlivost a bezpečnost\n• Cenová citlivost",
      "explanation": "Správná možnost odpovídá původní kartičce: • Malé rozměry a váha • Nízká spotřeba • Odolnost • Real-time funkce • Reaktivita • Spolehlivost a bezpečnost • Cenová citlivost Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-16-03",
        "b": "bosys-16-02",
        "c": "bosys-16-04",
        "d": "bosys-16-07"
      },
      "tags": [
        "BOSYS",
        "sekce-16",
        "pozadavky-na-os-pro-praci-v-realnem-case",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-17-01",
      "source_card_id": "bosys-17-01",
      "stable_id": "d738cd4d",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Kategorie počítačových systémů z hlediska paralelizace zpracování dat.",
      "options": {
        "a": "• S těsnou vazbou (Tightly coupled) = procesory mají sdílenou operační paměť a jeden OS\n• S volnou vazbou (Loosely coupled) = každý procesor má vlastní operační paměť a V-V subsystémy",
        "b": "• Symetrické (SMP) = mají shodné procesory\n◦ jádro OS, procesy i vlákna mohou být prováděny libovolným procesorem\n• Asymetrické (AMP) = specializované procesory pro specializované úlohy\n◦ jádro a většina úloh běží na hlavním CPU",
        "c": "• Granulatrita = popisuje, jak jemně lze úlohu rozdělit na menší části, které lze paralelně\nzpracovat\n• Hrubě granulovatelná úloha = není nutné či nelze příliš rozdělit\n◦ mezi jednotlivými úseky není třeba příliš komunikace a synchronizace\n◦ vhodné dělit na kooperující procesy\n• Jemně granulovatelná úloha = lze rozdělit na kratší úseky\n◦ častější komunikace nebo synchronizace\n◦ vhodné zpracovávat paralelně",
        "d": "• SISD = jeden instrukční proud, jeden proud dat\n• SIMD = jeden instrukční proud, vícero datových proudů\n• MISD = více instrukčních proudů nad jedním datovým proudem\n• MIMD = vícero instrukčních i datových proudů"
      },
      "correct": "d",
      "correct_answer": "• SISD = jeden instrukční proud, jeden proud dat\n• SIMD = jeden instrukční proud, vícero datových proudů\n• MISD = více instrukčních proudů nad jedním datovým proudem\n• MIMD = vícero instrukčních i datových proudů",
      "explanation": "Správná možnost odpovídá původní kartičce: • SISD = jeden instrukční proud, jeden proud dat • SIMD = jeden instrukční proud, vícero datových proudů • MISD = více instrukčních proudů nad jedním datovým proudem • MIMD = vícero instrukčních i datových proudů Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-17-02",
        "b": "bosys-17-03",
        "c": "bosys-17-04",
        "d": "bosys-17-01"
      },
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-17-02",
      "source_card_id": "bosys-17-02",
      "stable_id": "f2aa5757",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Rozdělení víceprocesorových systémů dle vazby.",
      "options": {
        "a": "• SISD = jeden instrukční proud, jeden proud dat\n• SIMD = jeden instrukční proud, vícero datových proudů\n• MISD = více instrukčních proudů nad jedním datovým proudem\n• MIMD = vícero instrukčních i datových proudů",
        "b": "• Symetrické (SMP) = mají shodné procesory\n◦ jádro OS, procesy i vlákna mohou být prováděny libovolným procesorem\n• Asymetrické (AMP) = specializované procesory pro specializované úlohy\n◦ jádro a většina úloh běží na hlavním CPU",
        "c": "• Granulatrita = popisuje, jak jemně lze úlohu rozdělit na menší části, které lze paralelně\nzpracovat\n• Hrubě granulovatelná úloha = není nutné či nelze příliš rozdělit\n◦ mezi jednotlivými úseky není třeba příliš komunikace a synchronizace\n◦ vhodné dělit na kooperující procesy\n• Jemně granulovatelná úloha = lze rozdělit na kratší úseky\n◦ častější komunikace nebo synchronizace\n◦ vhodné zpracovávat paralelně",
        "d": "• S těsnou vazbou (Tightly coupled) = procesory mají sdílenou operační paměť a jeden OS\n• S volnou vazbou (Loosely coupled) = každý procesor má vlastní operační paměť a V-V subsystémy"
      },
      "correct": "d",
      "correct_answer": "• S těsnou vazbou (Tightly coupled) = procesory mají sdílenou operační paměť a jeden OS\n• S volnou vazbou (Loosely coupled) = každý procesor má vlastní operační paměť a V-V subsystémy",
      "explanation": "Správná možnost odpovídá původní kartičce: • S těsnou vazbou (Tightly coupled) = procesory mají sdílenou operační paměť a jeden OS • S volnou vazbou (Loosely coupled) = každý procesor má vlastní operační paměť a V-V subsystémy Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-17-01",
        "b": "bosys-17-03",
        "c": "bosys-17-04",
        "d": "bosys-17-02"
      },
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-17-03",
      "source_card_id": "bosys-17-03",
      "stable_id": "ed44857b",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Rozdělení víceprocesorových systémů dle symetrie.",
      "options": {
        "a": "• Symetrické (SMP) = mají shodné procesory\n◦ jádro OS, procesy i vlákna mohou být prováděny libovolným procesorem\n• Asymetrické (AMP) = specializované procesory pro specializované úlohy\n◦ jádro a většina úloh běží na hlavním CPU",
        "b": "• Hrubá = Loosely-coupled\n• Jemná = Tightly-coupled",
        "c": "• SISD = jeden instrukční proud, jeden proud dat\n• SIMD = jeden instrukční proud, vícero datových proudů\n• MISD = více instrukčních proudů nad jedním datovým proudem\n• MIMD = vícero instrukčních i datových proudů",
        "d": "• Granulatrita = popisuje, jak jemně lze úlohu rozdělit na menší části, které lze paralelně\nzpracovat\n• Hrubě granulovatelná úloha = není nutné či nelze příliš rozdělit\n◦ mezi jednotlivými úseky není třeba příliš komunikace a synchronizace\n◦ vhodné dělit na kooperující procesy\n• Jemně granulovatelná úloha = lze rozdělit na kratší úseky\n◦ častější komunikace nebo synchronizace\n◦ vhodné zpracovávat paralelně"
      },
      "correct": "a",
      "correct_answer": "• Symetrické (SMP) = mají shodné procesory\n◦ jádro OS, procesy i vlákna mohou být prováděny libovolným procesorem\n• Asymetrické (AMP) = specializované procesory pro specializované úlohy\n◦ jádro a většina úloh běží na hlavním CPU",
      "explanation": "Správná možnost odpovídá původní kartičce: • Symetrické (SMP) = mají shodné procesory ◦ jádro OS, procesy i vlákna mohou být prováděny libovolným procesorem • Asymetrické (AMP) = specializované procesory pro specializované úlohy ◦ jádro a většina úloh běží na hlavním CPU Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-17-03",
        "b": "bosys-17-05",
        "c": "bosys-17-01",
        "d": "bosys-17-04"
      },
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-17-04",
      "source_card_id": "bosys-17-04",
      "stable_id": "72e6d882",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Granularita úlohy: účel, jak se pozná, že úloha je/není granulovatelná.",
      "options": {
        "a": "• Granulatrita = popisuje, jak jemně lze úlohu rozdělit na menší části, které lze paralelně\nzpracovat\n• Hrubě granulovatelná úloha = není nutné či nelze příliš rozdělit\n◦ mezi jednotlivými úseky není třeba příliš komunikace a synchronizace\n◦ vhodné dělit na kooperující procesy\n• Jemně granulovatelná úloha = lze rozdělit na kratší úseky\n◦ častější komunikace nebo synchronizace\n◦ vhodné zpracovávat paralelně",
        "b": "• SISD = jeden instrukční proud, jeden proud dat\n• SIMD = jeden instrukční proud, vícero datových proudů\n• MISD = více instrukčních proudů nad jedním datovým proudem\n• MIMD = vícero instrukčních i datových proudů",
        "c": "• Hrubá = Loosely-coupled\n• Jemná = Tightly-coupled",
        "d": "• S těsnou vazbou (Tightly coupled) = procesory mají sdílenou operační paměť a jeden OS\n• S volnou vazbou (Loosely coupled) = každý procesor má vlastní operační paměť a V-V subsystémy"
      },
      "correct": "a",
      "correct_answer": "• Granulatrita = popisuje, jak jemně lze úlohu rozdělit na menší části, které lze paralelně\nzpracovat\n• Hrubě granulovatelná úloha = není nutné či nelze příliš rozdělit\n◦ mezi jednotlivými úseky není třeba příliš komunikace a synchronizace\n◦ vhodné dělit na kooperující procesy\n• Jemně granulovatelná úloha = lze rozdělit na kratší úseky\n◦ častější komunikace nebo synchronizace\n◦ vhodné zpracovávat paralelně",
      "explanation": "Správná možnost odpovídá původní kartičce: • Granulatrita = popisuje, jak jemně lze úlohu rozdělit na menší části, které lze paralelně zpracovat • Hrubě granulovatelná úloha = není nutné či nelze příliš rozdělit ◦ mezi jednotlivými úseky není třeba příliš komunikace a synchronizace ◦ vhodné dělit na kooperující procesy • Jemně granulovatelná úloha = lze rozdělit na kratší úseky ◦ častější komunikace… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-17-04",
        "b": "bosys-17-01",
        "c": "bosys-17-05",
        "d": "bosys-17-02"
      },
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-17-05",
      "source_card_id": "bosys-17-05",
      "stable_id": "c4b33c23",
      "section_index": 17,
      "section": "Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, souvislost s vazbou (víceprocesorových systémů) a stupně paralelismu, distribuované (rozptýlené, clusterové) OS.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Vhodné stupně vazby pro různou granularitu.",
      "options": {
        "a": "• Symetrické (SMP) = mají shodné procesory\n◦ jádro OS, procesy i vlákna mohou být prováděny libovolným procesorem\n• Asymetrické (AMP) = specializované procesory pro specializované úlohy\n◦ jádro a většina úloh běží na hlavním CPU",
        "b": "• Hrubá = Loosely-coupled\n• Jemná = Tightly-coupled",
        "c": "• SISD = jeden instrukční proud, jeden proud dat\n• SIMD = jeden instrukční proud, vícero datových proudů\n• MISD = více instrukčních proudů nad jedním datovým proudem\n• MIMD = vícero instrukčních i datových proudů",
        "d": "• S těsnou vazbou (Tightly coupled) = procesory mají sdílenou operační paměť a jeden OS\n• S volnou vazbou (Loosely coupled) = každý procesor má vlastní operační paměť a V-V subsystémy"
      },
      "correct": "b",
      "correct_answer": "• Hrubá = Loosely-coupled\n• Jemná = Tightly-coupled",
      "explanation": "Správná možnost odpovídá původní kartičce: • Hrubá = Loosely-coupled • Jemná = Tightly-coupled Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-17-03",
        "b": "bosys-17-05",
        "c": "bosys-17-01",
        "d": "bosys-17-02"
      },
      "tags": [
        "BOSYS",
        "sekce-17",
        "viceprocesorove-systemy-rozdeleni-dle-vazby-a-dle-symetrie",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-18-01",
      "source_card_id": "bosys-18-01",
      "stable_id": "94f20403",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Definice kritické sekce v programu.",
      "options": {
        "a": "• SW řešení = čistě algoritmické postupy\n◦ “Bakery” a Petersonův algoritmus\n• HW řešení = využití atomických instrukcí procesoru\n◦ Zákaz přerušení, speciální instrukce (test-and-set, xchg)",
        "b": "• Vzájemné vylučování (mutual exclusion) = vždy jen jeden proces v kritické sekci\n• Pokrok v přidělování (progress) = pokud je volná KS, měl by do ní vstoupit zájemce v konečném čase\n• Omezené čekání (bounded wait) = každý proces bude vpuštěn do KS po omezeném počtu\nvstupů jiných procesů\n◦ žádný proces nesmí čekat nekonečně dlouho",
        "c": "• Část kódu, ve kterém se manipuluje se sdíleným prostředkem\n• V každém okamžiku smí být tento kód vykonáván nanejvýš jedním procesem",
        "d": "• Proces se provádí nenulovou rychlostí\n• Nelze předpokládat relativní rychlost procesů ani jejich plánování\n◦ např. Nelze spoléhat na střídání procesů na CPU\n• U víceprocesorových systémů se předpokládá, že zápis na jedno sdílené paměťové místo\nje atomický (pouze pro jediný procesor)"
      },
      "correct": "c",
      "correct_answer": "• Část kódu, ve kterém se manipuluje se sdíleným prostředkem\n• V každém okamžiku smí být tento kód vykonáván nanejvýš jedním procesem",
      "explanation": "Správná možnost odpovídá původní kartičce: • Část kódu, ve kterém se manipuluje se sdíleným prostředkem • V každém okamžiku smí být tento kód vykonáván nanejvýš jedním procesem Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-18-04",
        "b": "bosys-18-03",
        "c": "bosys-18-01",
        "d": "bosys-18-02"
      },
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-18-02",
      "source_card_id": "bosys-18-02",
      "stable_id": "e1e7cb60",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Předpoklady pro řešení přístupu do kritické sekce. (Co se předpokládá, že platí, a co se nesmí předpokládat.)",
      "options": {
        "a": "• Vzájemné vylučování (mutual exclusion) = vždy jen jeden proces v kritické sekci\n• Pokrok v přidělování (progress) = pokud je volná KS, měl by do ní vstoupit zájemce v konečném čase\n• Omezené čekání (bounded wait) = každý proces bude vpuštěn do KS po omezeném počtu\nvstupů jiných procesů\n◦ žádný proces nesmí čekat nekonečně dlouho",
        "b": "• Proces se provádí nenulovou rychlostí\n• Nelze předpokládat relativní rychlost procesů ani jejich plánování\n◦ např. Nelze spoléhat na střídání procesů na CPU\n• U víceprocesorových systémů se předpokládá, že zápis na jedno sdílené paměťové místo\nje atomický (pouze pro jediný procesor)",
        "c": "• Část kódu, ve kterém se manipuluje se sdíleným prostředkem\n• V každém okamžiku smí být tento kód vykonáván nanejvýš jedním procesem",
        "d": "• SW řešení = čistě algoritmické postupy\n◦ “Bakery” a Petersonův algoritmus\n• HW řešení = využití atomických instrukcí procesoru\n◦ Zákaz přerušení, speciální instrukce (test-and-set, xchg)"
      },
      "correct": "b",
      "correct_answer": "• Proces se provádí nenulovou rychlostí\n• Nelze předpokládat relativní rychlost procesů ani jejich plánování\n◦ např. Nelze spoléhat na střídání procesů na CPU\n• U víceprocesorových systémů se předpokládá, že zápis na jedno sdílené paměťové místo\nje atomický (pouze pro jediný procesor)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Proces se provádí nenulovou rychlostí • Nelze předpokládat relativní rychlost procesů ani jejich plánování ◦ např. Nelze spoléhat na střídání procesů na CPU • U víceprocesorových systémů se předpokládá, že zápis na jedno sdílené paměťové místo je atomický (pouze pro jediný procesor) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-18-03",
        "b": "bosys-18-02",
        "c": "bosys-18-01",
        "d": "bosys-18-04"
      },
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-18-03",
      "source_card_id": "bosys-18-03",
      "stable_id": "49933601",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Požadované vlastnosti řešení přístupu do kritické sekce (s vysvětlením).",
      "options": {
        "a": "• Část kódu, ve kterém se manipuluje se sdíleným prostředkem\n• V každém okamžiku smí být tento kód vykonáván nanejvýš jedním procesem",
        "b": "• Proces se provádí nenulovou rychlostí\n• Nelze předpokládat relativní rychlost procesů ani jejich plánování\n◦ např. Nelze spoléhat na střídání procesů na CPU\n• U víceprocesorových systémů se předpokládá, že zápis na jedno sdílené paměťové místo\nje atomický (pouze pro jediný procesor)",
        "c": "• SW řešení = čistě algoritmické postupy\n◦ “Bakery” a Petersonův algoritmus\n• HW řešení = využití atomických instrukcí procesoru\n◦ Zákaz přerušení, speciální instrukce (test-and-set, xchg)",
        "d": "• Vzájemné vylučování (mutual exclusion) = vždy jen jeden proces v kritické sekci\n• Pokrok v přidělování (progress) = pokud je volná KS, měl by do ní vstoupit zájemce v konečném čase\n• Omezené čekání (bounded wait) = každý proces bude vpuštěn do KS po omezeném počtu\nvstupů jiných procesů\n◦ žádný proces nesmí čekat nekonečně dlouho"
      },
      "correct": "d",
      "correct_answer": "• Vzájemné vylučování (mutual exclusion) = vždy jen jeden proces v kritické sekci\n• Pokrok v přidělování (progress) = pokud je volná KS, měl by do ní vstoupit zájemce v konečném čase\n• Omezené čekání (bounded wait) = každý proces bude vpuštěn do KS po omezeném počtu\nvstupů jiných procesů\n◦ žádný proces nesmí čekat nekonečně dlouho",
      "explanation": "Správná možnost odpovídá původní kartičce: • Vzájemné vylučování (mutual exclusion) = vždy jen jeden proces v kritické sekci • Pokrok v přidělování (progress) = pokud je volná KS, měl by do ní vstoupit zájemce v konečném čase • Omezené čekání (bounded wait) = každý proces bude vpuštěn do KS po omezeném počtu vstupů jiných procesů ◦ žádný proces nesmí čekat nekonečně dlouho Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-18-01",
        "b": "bosys-18-02",
        "c": "bosys-18-04",
        "d": "bosys-18-03"
      },
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-18-04",
      "source_card_id": "bosys-18-04",
      "stable_id": "0e43ec31",
      "section_index": 18,
      "section": "Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Typy řešení přístupu do kritické sekce (s příklady).",
      "options": {
        "a": "• SW řešení = čistě algoritmické postupy\n◦ “Bakery” a Petersonův algoritmus\n• HW řešení = využití atomických instrukcí procesoru\n◦ Zákaz přerušení, speciální instrukce (test-and-set, xchg)",
        "b": "• Část kódu, ve kterém se manipuluje se sdíleným prostředkem\n• V každém okamžiku smí být tento kód vykonáván nanejvýš jedním procesem",
        "c": "• Vzájemné vylučování (mutual exclusion) = vždy jen jeden proces v kritické sekci\n• Pokrok v přidělování (progress) = pokud je volná KS, měl by do ní vstoupit zájemce v konečném čase\n• Omezené čekání (bounded wait) = každý proces bude vpuštěn do KS po omezeném počtu\nvstupů jiných procesů\n◦ žádný proces nesmí čekat nekonečně dlouho",
        "d": "• Proces se provádí nenulovou rychlostí\n• Nelze předpokládat relativní rychlost procesů ani jejich plánování\n◦ např. Nelze spoléhat na střídání procesů na CPU\n• U víceprocesorových systémů se předpokládá, že zápis na jedno sdílené paměťové místo\nje atomický (pouze pro jediný procesor)"
      },
      "correct": "a",
      "correct_answer": "• SW řešení = čistě algoritmické postupy\n◦ “Bakery” a Petersonův algoritmus\n• HW řešení = využití atomických instrukcí procesoru\n◦ Zákaz přerušení, speciální instrukce (test-and-set, xchg)",
      "explanation": "Správná možnost odpovídá původní kartičce: • SW řešení = čistě algoritmické postupy ◦ “Bakery” a Petersonův algoritmus • HW řešení = využití atomických instrukcí procesoru ◦ Zákaz přerušení, speciální instrukce (test-and-set, xchg) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-18-04",
        "b": "bosys-18-01",
        "c": "bosys-18-03",
        "d": "bosys-18-02"
      },
      "tags": [
        "BOSYS",
        "sekce-18",
        "soupereni-procesu-o-prostredky-obecne-problemy-soubehu-vzajemne",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-19-01",
      "source_card_id": "bosys-19-01",
      "stable_id": "2f08a16b",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "SW algoritmus pro KS s proměnnou locked, důvod nefunkčnosti.",
      "options": {
        "a": "• Zavedení proměnné, která eviduje obsazenost KS\n• Zjišťujeme, zda je bool locked = false, pokud ano, tak locked = true -> KS -> locked = false\n• Problém = 2 procesy mohou vidět locked = false, oba vstoupí do KS",
        "b": "• Zavedení proměnné určující, který proces smí vstoupit do KS -> střídání\n• Problém = pokud jeden proces nechce vstoupit do KS, druhý může být zablokován",
        "c": "• Zavedení sdílené proměnné flags pro každý proces\n• Signalizuje, zda proces požaduje vstup do KS\n• Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag)\n◦ deadlock",
        "d": "• Havárie v KS = pro ostatní procesy se KS jeví jako obsazená\n• Busy wait (aktivní čekání) = procesy čekající na vstup do obsazené KS spotřebovávají neproduktivně čas procesoru\n→ SW řešení je vhodné pouze pokud je KS velmi krátká\n• Deadlocky = při striktně prioritním plánování\n◦ přeruší-li proces s vyšší prio. proces v KS, proces s nižší prio. nikdy KS neopustí\n◦ vyšší prio. proces se nedostane do KS (deadlock)"
      },
      "correct": "a",
      "correct_answer": "• Zavedení proměnné, která eviduje obsazenost KS\n• Zjišťujeme, zda je bool locked = false, pokud ano, tak locked = true -> KS -> locked = false\n• Problém = 2 procesy mohou vidět locked = false, oba vstoupí do KS",
      "explanation": "Správná možnost odpovídá původní kartičce: • Zavedení proměnné, která eviduje obsazenost KS • Zjišťujeme, zda je bool locked = false, pokud ano, tak locked = true -> KS -> locked = false • Problém = 2 procesy mohou vidět locked = false, oba vstoupí do KS Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-19-01",
        "b": "bosys-19-02",
        "c": "bosys-19-03",
        "d": "bosys-19-05"
      },
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod",
        "abcd-test"
      ],
      "points_hint": "1 + 1"
    },
    {
      "id": "bosys-abcd-19-02",
      "source_card_id": "bosys-19-02",
      "stable_id": "ca184a3e",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "SW algoritmus pro KS s proměnnou turn, důvod nefunkčnosti.",
      "options": {
        "a": "• Zavedení sdílené proměnné flags pro každý proces\n• Signalizuje, zda proces požaduje vstup do KS\n• Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag)\n◦ deadlock",
        "b": "• Havárie v KS = pro ostatní procesy se KS jeví jako obsazená\n• Busy wait (aktivní čekání) = procesy čekající na vstup do obsazené KS spotřebovávají neproduktivně čas procesoru\n→ SW řešení je vhodné pouze pokud je KS velmi krátká\n• Deadlocky = při striktně prioritním plánování\n◦ přeruší-li proces s vyšší prio. proces v KS, proces s nižší prio. nikdy KS neopustí\n◦ vyšší prio. proces se nedostane do KS (deadlock)",
        "c": "• Zavedení proměnné určující, který proces smí vstoupit do KS -> střídání\n• Problém = pokud jeden proces nechce vstoupit do KS, druhý může být zablokován",
        "d": "• Zavedení proměnné, která eviduje obsazenost KS\n• Zjišťujeme, zda je bool locked = false, pokud ano, tak locked = true -> KS -> locked = false\n• Problém = 2 procesy mohou vidět locked = false, oba vstoupí do KS"
      },
      "correct": "c",
      "correct_answer": "• Zavedení proměnné určující, který proces smí vstoupit do KS -> střídání\n• Problém = pokud jeden proces nechce vstoupit do KS, druhý může být zablokován",
      "explanation": "Správná možnost odpovídá původní kartičce: • Zavedení proměnné určující, který proces smí vstoupit do KS -> střídání • Problém = pokud jeden proces nechce vstoupit do KS, druhý může být zablokován Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-19-03",
        "b": "bosys-19-05",
        "c": "bosys-19-02",
        "d": "bosys-19-01"
      },
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod",
        "abcd-test"
      ],
      "points_hint": "1 + 1"
    },
    {
      "id": "bosys-abcd-19-03",
      "source_card_id": "bosys-19-03",
      "stable_id": "a42da5d7",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "SW algoritmus pro KS s proměnnými flag[i], důvod nefunkčnosti.",
      "options": {
        "a": "• Zavedení proměnné, která eviduje obsazenost KS\n• Zjišťujeme, zda je bool locked = false, pokud ano, tak locked = true -> KS -> locked = false\n• Problém = 2 procesy mohou vidět locked = false, oba vstoupí do KS",
        "b": "• Zavedení proměnné určující, který proces smí vstoupit do KS -> střídání\n• Problém = pokud jeden proces nechce vstoupit do KS, druhý může být zablokován",
        "c": "• Petersonův alg. = používá flag + turn, zajišťuje všechny 3 podmínky (pro 2 procesy)\n• Bakery alg. = proces dostane před vstupem do KS lístek s časem, potom čeká, až všechny\nmenší lístky vstoupí do KS (pro libovolný počet procesů)",
        "d": "• Zavedení sdílené proměnné flags pro každý proces\n• Signalizuje, zda proces požaduje vstup do KS\n• Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag)\n◦ deadlock"
      },
      "correct": "d",
      "correct_answer": "• Zavedení sdílené proměnné flags pro každý proces\n• Signalizuje, zda proces požaduje vstup do KS\n• Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag)\n◦ deadlock",
      "explanation": "Správná možnost odpovídá původní kartičce: • Zavedení sdílené proměnné flags pro každý proces • Signalizuje, zda proces požaduje vstup do KS • Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag) ◦ deadlock Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-19-01",
        "b": "bosys-19-02",
        "c": "bosys-19-04",
        "d": "bosys-19-03"
      },
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod",
        "abcd-test"
      ],
      "points_hint": "1 + 1"
    },
    {
      "id": "bosys-abcd-19-04",
      "source_card_id": "bosys-19-04",
      "stable_id": "bca0c42b",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Funkční SW algoritmy pro řízení přístupu do KS, krátká charakteristika.",
      "options": {
        "a": "• Petersonův alg. = používá flag + turn, zajišťuje všechny 3 podmínky (pro 2 procesy)\n• Bakery alg. = proces dostane před vstupem do KS lístek s časem, potom čeká, až všechny\nmenší lístky vstoupí do KS (pro libovolný počet procesů)",
        "b": "• Zavedení sdílené proměnné flags pro každý proces\n• Signalizuje, zda proces požaduje vstup do KS\n• Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag)\n◦ deadlock",
        "c": "• Zavedení proměnné, která eviduje obsazenost KS\n• Zjišťujeme, zda je bool locked = false, pokud ano, tak locked = true -> KS -> locked = false\n• Problém = 2 procesy mohou vidět locked = false, oba vstoupí do KS",
        "d": "• Havárie v KS = pro ostatní procesy se KS jeví jako obsazená\n• Busy wait (aktivní čekání) = procesy čekající na vstup do obsazené KS spotřebovávají neproduktivně čas procesoru\n→ SW řešení je vhodné pouze pokud je KS velmi krátká\n• Deadlocky = při striktně prioritním plánování\n◦ přeruší-li proces s vyšší prio. proces v KS, proces s nižší prio. nikdy KS neopustí\n◦ vyšší prio. proces se nedostane do KS (deadlock)"
      },
      "correct": "a",
      "correct_answer": "• Petersonův alg. = používá flag + turn, zajišťuje všechny 3 podmínky (pro 2 procesy)\n• Bakery alg. = proces dostane před vstupem do KS lístek s časem, potom čeká, až všechny\nmenší lístky vstoupí do KS (pro libovolný počet procesů)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Petersonův alg. = používá flag + turn, zajišťuje všechny 3 podmínky (pro 2 procesy) • Bakery alg. = proces dostane před vstupem do KS lístek s časem, potom čeká, až všechny menší lístky vstoupí do KS (pro libovolný počet procesů) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-19-04",
        "b": "bosys-19-03",
        "c": "bosys-19-01",
        "d": "bosys-19-05"
      },
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod",
        "abcd-test"
      ],
      "points_hint": "2 + 2"
    },
    {
      "id": "bosys-abcd-19-05",
      "source_card_id": "bosys-19-05",
      "stable_id": "826c2e5b",
      "section_index": 19,
      "section": "Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Specifické nevýhody SW algoritmů pro řízení přístupu do KS (včetně vysvětlení, bez všeobecných nevýhod všech typů algoritmů).",
      "options": {
        "a": "• Zavedení proměnné určující, který proces smí vstoupit do KS -> střídání\n• Problém = pokud jeden proces nechce vstoupit do KS, druhý může být zablokován",
        "b": "• Zavedení sdílené proměnné flags pro každý proces\n• Signalizuje, zda proces požaduje vstup do KS\n• Problém = oba vyvěsí flag a zacyklí se (každý čeká, až druhý resetuje svůj flag)\n◦ deadlock",
        "c": "• Petersonův alg. = používá flag + turn, zajišťuje všechny 3 podmínky (pro 2 procesy)\n• Bakery alg. = proces dostane před vstupem do KS lístek s časem, potom čeká, až všechny\nmenší lístky vstoupí do KS (pro libovolný počet procesů)",
        "d": "• Havárie v KS = pro ostatní procesy se KS jeví jako obsazená\n• Busy wait (aktivní čekání) = procesy čekající na vstup do obsazené KS spotřebovávají neproduktivně čas procesoru\n→ SW řešení je vhodné pouze pokud je KS velmi krátká\n• Deadlocky = při striktně prioritním plánování\n◦ přeruší-li proces s vyšší prio. proces v KS, proces s nižší prio. nikdy KS neopustí\n◦ vyšší prio. proces se nedostane do KS (deadlock)"
      },
      "correct": "d",
      "correct_answer": "• Havárie v KS = pro ostatní procesy se KS jeví jako obsazená\n• Busy wait (aktivní čekání) = procesy čekající na vstup do obsazené KS spotřebovávají neproduktivně čas procesoru\n→ SW řešení je vhodné pouze pokud je KS velmi krátká\n• Deadlocky = při striktně prioritním plánování\n◦ přeruší-li proces s vyšší prio. proces v KS, proces s nižší prio. nikdy KS neopustí\n◦ vyšší prio. proces se nedostane do KS (deadlock)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Havárie v KS = pro ostatní procesy se KS jeví jako obsazená • Busy wait (aktivní čekání) = procesy čekající na vstup do obsazené KS spotřebovávají neproduktivně čas procesoru → SW řešení je vhodné pouze pokud je KS velmi krátká • Deadlocky = při striktně prioritním plánování ◦ přeruší-li proces s vyšší prio. proces v KS, proces s nižší prio. nikdy KS… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-19-02",
        "b": "bosys-19-03",
        "c": "bosys-19-04",
        "d": "bosys-19-05"
      },
      "tags": [
        "BOSYS",
        "sekce-19",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-sw-metod",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-20-01",
      "source_card_id": "bosys-20-01",
      "stable_id": "c89b5083",
      "section_index": 20,
      "section": "Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Hardwarové předpoklady pro řízení přístupu do KS.",
      "options": {
        "a": "• Procesy jsou vykonávány procesorem kontinuálně dokud OS nevyvolá službu nebo nejsou přeřušeny přerušovacím signálem\n• K přerušení může dojít pouze na hranicích instrukcí (po dokončení a před zahájením další)\n• Přístup k operační paměti je výlučný",
        "b": "• Zákaz přerušení = běžící procesy nemohou být přerušeny jinými procesy, dokud není aktivován plánovač OS\n◦ ten může být aktivován systémovým voláním\nnebo časovač vygeneruje signál přerušení a procesor skočí na obslužnou rutinu do jádra\n• Speciální instrukce: (pokud bychom využili SW řešení s proměnnou locked a provedly operace pro čtení a zápis atomicky)\n• Test-and-set = v jedné operaci se atomicky přečte příznak (paměťové místo) a současně se nastaví\n◦ je-li příznak nastaven tak je KS obsazená, jinak smí proces vstoupit do KS\n• xchg = atomicky vymění obsah dvou operandů = lze využít jako instrukci\ntest_and_set\n◦ v každém z procesů se ve vstupní sekci nastaví lokální proměnná na obsazeno a\ninstrukcí xchg se vymění obsah s proměnnou určující obsazenost KS\n◦ výměna se provádí, dokud není přečtena hodnota ‘volná KS’",
        "c": "• Zakázat přerušení nelze u víceprocesorových systémů (na dalším procesoru může běžet další proces)\n• Zvyšuje se latence systému = během zákazu se pozdrží reakce systému a zvýší se odezva\n• Zákaz a povolení jsou povolené pouze v privilegovaném režimu\n• Instrukce test-and-set trpí stejnými nedostatky jako SW řešení (aktivní čekání, problém s prioritním plánováním)\n◦ navíc není řešen požadavek omezeného čekání\n• Řeší pouze vzájemné vylučování, ostatní požadavky třeba řešit algoritmicky\n• Velmi krátká vstupní a výstupní sekce",
        "d": "• Inicializace semaforu na nulu\n• Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal"
      },
      "correct": "a",
      "correct_answer": "• Procesy jsou vykonávány procesorem kontinuálně dokud OS nevyvolá službu nebo nejsou přeřušeny přerušovacím signálem\n• K přerušení může dojít pouze na hranicích instrukcí (po dokončení a před zahájením další)\n• Přístup k operační paměti je výlučný",
      "explanation": "Správná možnost odpovídá původní kartičce: • Procesy jsou vykonávány procesorem kontinuálně dokud OS nevyvolá službu nebo nejsou přeřušeny přerušovacím signálem • K přerušení může dojít pouze na hranicích instrukcí (po dokončení a před zahájením další) • Přístup k operační paměti je výlučný Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-20-01",
        "b": "bosys-20-02",
        "c": "bosys-20-03",
        "d": "bosys-21-04"
      },
      "tags": [
        "BOSYS",
        "sekce-20",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-hw-metod",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-20-02",
      "source_card_id": "bosys-20-02",
      "stable_id": "48827d28",
      "section_index": 20,
      "section": "Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "HW podpora pro řízení přístupu do KS, popis řešení.",
      "options": {
        "a": "• Procesy jsou vykonávány procesorem kontinuálně dokud OS nevyvolá službu nebo nejsou přeřušeny přerušovacím signálem\n• K přerušení může dojít pouze na hranicích instrukcí (po dokončení a před zahájením další)\n• Přístup k operační paměti je výlučný",
        "b": "• Zakázat přerušení nelze u víceprocesorových systémů (na dalším procesoru může běžet další proces)\n• Zvyšuje se latence systému = během zákazu se pozdrží reakce systému a zvýší se odezva\n• Zákaz a povolení jsou povolené pouze v privilegovaném režimu\n• Instrukce test-and-set trpí stejnými nedostatky jako SW řešení (aktivní čekání, problém s prioritním plánováním)\n◦ navíc není řešen požadavek omezeného čekání\n• Řeší pouze vzájemné vylučování, ostatní požadavky třeba řešit algoritmicky\n• Velmi krátká vstupní a výstupní sekce",
        "c": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
        "d": "• Zákaz přerušení = běžící procesy nemohou být přerušeny jinými procesy, dokud není aktivován plánovač OS\n◦ ten může být aktivován systémovým voláním\nnebo časovač vygeneruje signál přerušení a procesor skočí na obslužnou rutinu do jádra\n• Speciální instrukce: (pokud bychom využili SW řešení s proměnnou locked a provedly operace pro čtení a zápis atomicky)\n• Test-and-set = v jedné operaci se atomicky přečte příznak (paměťové místo) a současně se nastaví\n◦ je-li příznak nastaven tak je KS obsazená, jinak smí proces vstoupit do KS\n• xchg = atomicky vymění obsah dvou operandů = lze využít jako instrukci\ntest_and_set\n◦ v každém z procesů se ve vstupní sekci nastaví lokální proměnná na obsazeno a\ninstrukcí xchg se vymění obsah s proměnnou určující obsazenost KS\n◦ výměna se provádí, dokud není přečtena hodnota ‘volná KS’"
      },
      "correct": "d",
      "correct_answer": "• Zákaz přerušení = běžící procesy nemohou být přerušeny jinými procesy, dokud není aktivován plánovač OS\n◦ ten může být aktivován systémovým voláním\nnebo časovač vygeneruje signál přerušení a procesor skočí na obslužnou rutinu do jádra\n• Speciální instrukce: (pokud bychom využili SW řešení s proměnnou locked a provedly operace pro čtení a zápis atomicky)\n• Test-and-set = v jedné operaci se atomicky přečte příznak (paměťové místo) a současně se nastaví\n◦ je-li příznak nastaven tak je KS obsazená, jinak smí proces vstoupit do KS\n• xchg = atomicky vymění obsah dvou operandů = lze využít jako instrukci\ntest_and_set\n◦ v každém z procesů se ve vstupní sekci nastaví lokální proměnná na obsazeno a\ninstrukcí xchg se vymění obsah s proměnnou určující obsazenost KS\n◦ výměna se provádí, dokud není přečtena hodnota ‘volná KS’",
      "explanation": "Správná možnost odpovídá původní kartičce: • Zákaz přerušení = běžící procesy nemohou být přerušeny jinými procesy, dokud není aktivován plánovač OS ◦ ten může být aktivován systémovým voláním nebo časovač vygeneruje signál přerušení a procesor skočí na obslužnou rutinu do jádra • Speciální instrukce: (pokud bychom využili SW řešení s proměnnou locked a provedly operace pro čtení a zápis atomicky) •… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-20-01",
        "b": "bosys-20-03",
        "c": "bosys-21-05",
        "d": "bosys-20-02"
      },
      "tags": [
        "BOSYS",
        "sekce-20",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-hw-metod",
        "abcd-test"
      ],
      "points_hint": "2 + 3"
    },
    {
      "id": "bosys-abcd-20-03",
      "source_card_id": "bosys-20-03",
      "stable_id": "8e820ecd",
      "section_index": 20,
      "section": "Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Vlastností (nedostatky) HW řešení.",
      "options": {
        "a": "• Zakázat přerušení nelze u víceprocesorových systémů (na dalším procesoru může běžet další proces)\n• Zvyšuje se latence systému = během zákazu se pozdrží reakce systému a zvýší se odezva\n• Zákaz a povolení jsou povolené pouze v privilegovaném režimu\n• Instrukce test-and-set trpí stejnými nedostatky jako SW řešení (aktivní čekání, problém s prioritním plánováním)\n◦ navíc není řešen požadavek omezeného čekání\n• Řeší pouze vzájemné vylučování, ostatní požadavky třeba řešit algoritmicky\n• Velmi krátká vstupní a výstupní sekce",
        "b": "• Procesy jsou vykonávány procesorem kontinuálně dokud OS nevyvolá službu nebo nejsou přeřušeny přerušovacím signálem\n• K přerušení může dojít pouze na hranicích instrukcí (po dokončení a před zahájením další)\n• Přístup k operační paměti je výlučný",
        "c": "• Zákaz přerušení = běžící procesy nemohou být přerušeny jinými procesy, dokud není aktivován plánovač OS\n◦ ten může být aktivován systémovým voláním\nnebo časovač vygeneruje signál přerušení a procesor skočí na obslužnou rutinu do jádra\n• Speciální instrukce: (pokud bychom využili SW řešení s proměnnou locked a provedly operace pro čtení a zápis atomicky)\n• Test-and-set = v jedné operaci se atomicky přečte příznak (paměťové místo) a současně se nastaví\n◦ je-li příznak nastaven tak je KS obsazená, jinak smí proces vstoupit do KS\n• xchg = atomicky vymění obsah dvou operandů = lze využít jako instrukci\ntest_and_set\n◦ v každém z procesů se ve vstupní sekci nastaví lokální proměnná na obsazeno a\ninstrukcí xchg se vymění obsah s proměnnou určující obsazenost KS\n◦ výměna se provádí, dokud není přečtena hodnota ‘volná KS’",
        "d": "• Inicializace semaforu na nulu\n• Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal"
      },
      "correct": "a",
      "correct_answer": "• Zakázat přerušení nelze u víceprocesorových systémů (na dalším procesoru může běžet další proces)\n• Zvyšuje se latence systému = během zákazu se pozdrží reakce systému a zvýší se odezva\n• Zákaz a povolení jsou povolené pouze v privilegovaném režimu\n• Instrukce test-and-set trpí stejnými nedostatky jako SW řešení (aktivní čekání, problém s prioritním plánováním)\n◦ navíc není řešen požadavek omezeného čekání\n• Řeší pouze vzájemné vylučování, ostatní požadavky třeba řešit algoritmicky\n• Velmi krátká vstupní a výstupní sekce",
      "explanation": "Správná možnost odpovídá původní kartičce: • Zakázat přerušení nelze u víceprocesorových systémů (na dalším procesoru může běžet další proces) • Zvyšuje se latence systému = během zákazu se pozdrží reakce systému a zvýší se odezva • Zákaz a povolení jsou povolené pouze v privilegovaném režimu • Instrukce test-and-set trpí stejnými nedostatky jako SW řešení (aktivní čekání, problém s prioritním… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-20-03",
        "b": "bosys-20-01",
        "c": "bosys-20-02",
        "d": "bosys-21-04"
      },
      "tags": [
        "BOSYS",
        "sekce-20",
        "rizeni-pristupu-do-kriticke-sekce-pomoci-hw-metod",
        "abcd-test"
      ],
      "points_hint": "4 + 3"
    },
    {
      "id": "bosys-abcd-21-01",
      "source_card_id": "bosys-21-01",
      "stable_id": "b0194629",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis nástroje OS: semafor.",
      "options": {
        "a": "• Řídí přístup do KS a synchronizuje procesy\n• Jádrová datová struktura, která kombinuje celočíselný čítač a frontu blokovaných procesů",
        "b": "• Inicializace čítače semaforu na počet procesů (typicky 1)\n• Ve vstupní sekci se volá operace wait\n• Ve výstupní sekci se volá operace signal",
        "c": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
        "d": "• Inicializace semaforu na nulu\n• Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal"
      },
      "correct": "a",
      "correct_answer": "• Řídí přístup do KS a synchronizuje procesy\n• Jádrová datová struktura, která kombinuje celočíselný čítač a frontu blokovaných procesů",
      "explanation": "Správná možnost odpovídá původní kartičce: • Řídí přístup do KS a synchronizuje procesy • Jádrová datová struktura, která kombinuje celočíselný čítač a frontu blokovaných procesů Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-21-01",
        "b": "bosys-21-03",
        "c": "bosys-21-05",
        "d": "bosys-21-04"
      },
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-21-02",
      "source_card_id": "bosys-21-02",
      "stable_id": "bfdf6110",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Popis systémových volání semaforu.",
      "options": {
        "a": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
        "b": "• Řídí přístup do KS a synchronizuje procesy\n• Jádrová datová struktura, která kombinuje celočíselný čítač a frontu blokovaných procesů",
        "c": "• Inicializace čítače semaforu na počet procesů (typicky 1)\n• Ve vstupní sekci se volá operace wait\n• Ve výstupní sekci se volá operace signal",
        "d": "• init = inicializuje čítač na nezápornou hodnotu\n• wait = snižuje hodnotu čítače, je-li výsledek záporný, volající proces je blokován a zařazen do fronty\n• signal = zvyšuje hodnotu čítače a případně odblokuje blokované procesy"
      },
      "correct": "d",
      "correct_answer": "• init = inicializuje čítač na nezápornou hodnotu\n• wait = snižuje hodnotu čítače, je-li výsledek záporný, volající proces je blokován a zařazen do fronty\n• signal = zvyšuje hodnotu čítače a případně odblokuje blokované procesy",
      "explanation": "Správná možnost odpovídá původní kartičce: • init = inicializuje čítač na nezápornou hodnotu • wait = snižuje hodnotu čítače, je-li výsledek záporný, volající proces je blokován a zařazen do fronty • signal = zvyšuje hodnotu čítače a případně odblokuje blokované procesy Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-21-05",
        "b": "bosys-21-01",
        "c": "bosys-21-03",
        "d": "bosys-21-02"
      },
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani",
        "abcd-test"
      ],
      "points_hint": "1 + 2 + 2"
    },
    {
      "id": "bosys-abcd-21-03",
      "source_card_id": "bosys-21-03",
      "stable_id": "cb239149",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis řešení přístupu do KS používajícího semafor.",
      "options": {
        "a": "• Inicializace semaforu na nulu\n• Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal",
        "b": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
        "c": "• Inicializace čítače semaforu na počet procesů (typicky 1)\n• Ve vstupní sekci se volá operace wait\n• Ve výstupní sekci se volá operace signal",
        "d": "• init = inicializuje čítač na nezápornou hodnotu\n• wait = snižuje hodnotu čítače, je-li výsledek záporný, volající proces je blokován a zařazen do fronty\n• signal = zvyšuje hodnotu čítače a případně odblokuje blokované procesy"
      },
      "correct": "c",
      "correct_answer": "• Inicializace čítače semaforu na počet procesů (typicky 1)\n• Ve vstupní sekci se volá operace wait\n• Ve výstupní sekci se volá operace signal",
      "explanation": "Správná možnost odpovídá původní kartičce: • Inicializace čítače semaforu na počet procesů (typicky 1) • Ve vstupní sekci se volá operace wait • Ve výstupní sekci se volá operace signal Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-21-04",
        "b": "bosys-21-05",
        "c": "bosys-21-03",
        "d": "bosys-21-02"
      },
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-21-04",
      "source_card_id": "bosys-21-04",
      "stable_id": "65303b5f",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Popis řešení synchronizace vláken pomocí semaforu.",
      "options": {
        "a": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
        "b": "• Inicializace semaforu na nulu\n• Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal",
        "c": "• init = inicializuje čítač na nezápornou hodnotu\n• wait = snižuje hodnotu čítače, je-li výsledek záporný, volající proces je blokován a zařazen do fronty\n• signal = zvyšuje hodnotu čítače a případně odblokuje blokované procesy",
        "d": "• Řídí přístup do KS a synchronizuje procesy\n• Jádrová datová struktura, která kombinuje celočíselný čítač a frontu blokovaných procesů"
      },
      "correct": "b",
      "correct_answer": "• Inicializace semaforu na nulu\n• Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal",
      "explanation": "Správná možnost odpovídá původní kartičce: • Inicializace semaforu na nulu • Čekající proces zavolá wait a prováděný proces po dokončení volá operaci signal Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-21-05",
        "b": "bosys-21-04",
        "c": "bosys-21-02",
        "d": "bosys-21-01"
      },
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-21-05",
      "source_card_id": "bosys-21-05",
      "stable_id": "d57e5c08",
      "section_index": 21,
      "section": "Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Definice problému obědvajících filozofů a jeho řešení pomocí semaforů.",
      "options": {
        "a": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
        "b": "• Inicializace čítače semaforu na počet procesů (typicky 1)\n• Ve vstupní sekci se volá operace wait\n• Ve výstupní sekci se volá operace signal",
        "c": "• Řídí přístup do KS a synchronizuje procesy\n• Jádrová datová struktura, která kombinuje celočíselný čítač a frontu blokovaných procesů",
        "d": "• init = inicializuje čítač na nezápornou hodnotu\n• wait = snižuje hodnotu čítače, je-li výsledek záporný, volající proces je blokován a zařazen do fronty\n• signal = zvyšuje hodnotu čítače a případně odblokuje blokované procesy"
      },
      "correct": "a",
      "correct_answer": "• Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory\n• Přiřazení semaforu vidličkám\n• Hrozí deadlock, pokud všichni vezmou levou vidličku současně\n• Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná",
      "explanation": "Správná možnost odpovídá původní kartičce: • Filozofové střídavě přemýšlí nebo jedí, sdílejí příbory • Přiřazení semaforu vidličkám • Hrozí deadlock, pokud všichni vezmou levou vidličku současně • Řešení: další semafor, který nedovolí všem sebrat vidličku, takže bude vždy alespoň jedna vidlička dostupná Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-21-05",
        "b": "bosys-21-03",
        "c": "bosys-21-01",
        "d": "bosys-21-02"
      },
      "tags": [
        "BOSYS",
        "sekce-21",
        "nastroj-os-semafor-jeho-popis-vcetne-systemovych-volani",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-22-01",
      "source_card_id": "bosys-22-01",
      "stable_id": "7bb5c87a",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis nástroje OS: předávání zpráv.",
      "options": {
        "a": "• Send = Neblokující, je-li ve frontě místo a blokující pokud je fronta plná\n• Receive = Neblokující, je-li ve frontě dostupná zpráva a blokující, pokud je fronta prázdná",
        "b": "• Do fronty zašleme tolik inicializačních zpráv, kolik procesů smí současně používat kód KS (typicky 1)\n• Vstupní sekce = volání receive\n• Výstupní sekce = volání send\n• První proces přijme init zprávu a vstoupí do KS, každé další volání receive je blokováno\ndokud není KS volná",
        "c": "• Prostředek k předávání dat mezi procesy bez sdílené paměti\n• Send = pošle zprávu do fronty\n• Receive = přijme zprávu z fronty",
        "d": "• Na začátku je fronta prázdná, procesy mají sdílenou proměnnou X\n• Provádějící proces provede výpočet X a pak pošle send signalizující jeho dokončení\n• Čekající proces čeká na dokončení a pak použije výslednou hodnotu"
      },
      "correct": "c",
      "correct_answer": "• Prostředek k předávání dat mezi procesy bez sdílené paměti\n• Send = pošle zprávu do fronty\n• Receive = přijme zprávu z fronty",
      "explanation": "Správná možnost odpovídá původní kartičce: • Prostředek k předávání dat mezi procesy bez sdílené paměti • Send = pošle zprávu do fronty • Receive = přijme zprávu z fronty Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-22-02",
        "b": "bosys-22-03",
        "c": "bosys-22-01",
        "d": "bosys-22-04"
      },
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-22-02",
      "source_card_id": "bosys-22-02",
      "stable_id": "f959a7d9",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Popis typické implementace (ne)blokování systémových volání pro předávání zpráv.",
      "options": {
        "a": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení = Frontu zpráv lze použít jako sklad a je třeba inicializovat max počet položek ve frontě\n◦ Producent SEND data do fronty/skladu\n◦ Konzument RECEIVE z fronty/skladu",
        "b": "• Na začátku je fronta prázdná, procesy mají sdílenou proměnnou X\n• Provádějící proces provede výpočet X a pak pošle send signalizující jeho dokončení\n• Čekající proces čeká na dokončení a pak použije výslednou hodnotu",
        "c": "• Send = Neblokující, je-li ve frontě místo a blokující pokud je fronta plná\n• Receive = Neblokující, je-li ve frontě dostupná zpráva a blokující, pokud je fronta prázdná",
        "d": "• Prostředek k předávání dat mezi procesy bez sdílené paměti\n• Send = pošle zprávu do fronty\n• Receive = přijme zprávu z fronty"
      },
      "correct": "c",
      "correct_answer": "• Send = Neblokující, je-li ve frontě místo a blokující pokud je fronta plná\n• Receive = Neblokující, je-li ve frontě dostupná zpráva a blokující, pokud je fronta prázdná",
      "explanation": "Správná možnost odpovídá původní kartičce: • Send = Neblokující, je-li ve frontě místo a blokující pokud je fronta plná • Receive = Neblokující, je-li ve frontě dostupná zpráva a blokující, pokud je fronta prázdná Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-22-05",
        "b": "bosys-22-04",
        "c": "bosys-22-02",
        "d": "bosys-22-01"
      },
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-22-03",
      "source_card_id": "bosys-22-03",
      "stable_id": "d40cb3c4",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis řešení KS používajícího frontu zpráv.",
      "options": {
        "a": "• Do fronty zašleme tolik inicializačních zpráv, kolik procesů smí současně používat kód KS (typicky 1)\n• Vstupní sekce = volání receive\n• Výstupní sekce = volání send\n• První proces přijme init zprávu a vstoupí do KS, každé další volání receive je blokováno\ndokud není KS volná",
        "b": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení = Frontu zpráv lze použít jako sklad a je třeba inicializovat max počet položek ve frontě\n◦ Producent SEND data do fronty/skladu\n◦ Konzument RECEIVE z fronty/skladu",
        "c": "• Na začátku je fronta prázdná, procesy mají sdílenou proměnnou X\n• Provádějící proces provede výpočet X a pak pošle send signalizující jeho dokončení\n• Čekající proces čeká na dokončení a pak použije výslednou hodnotu",
        "d": "• Prostředek k předávání dat mezi procesy bez sdílené paměti\n• Send = pošle zprávu do fronty\n• Receive = přijme zprávu z fronty"
      },
      "correct": "a",
      "correct_answer": "• Do fronty zašleme tolik inicializačních zpráv, kolik procesů smí současně používat kód KS (typicky 1)\n• Vstupní sekce = volání receive\n• Výstupní sekce = volání send\n• První proces přijme init zprávu a vstoupí do KS, každé další volání receive je blokováno\ndokud není KS volná",
      "explanation": "Správná možnost odpovídá původní kartičce: • Do fronty zašleme tolik inicializačních zpráv, kolik procesů smí současně používat kód KS (typicky 1) • Vstupní sekce = volání receive • Výstupní sekce = volání send • První proces přijme init zprávu a vstoupí do KS, každé další volání receive je blokováno dokud není KS volná Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-22-03",
        "b": "bosys-22-05",
        "c": "bosys-22-04",
        "d": "bosys-22-01"
      },
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-22-04",
      "source_card_id": "bosys-22-04",
      "stable_id": "0fb8ec20",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Popis řešení synchronizace vláken pomocí fronty zpráv.",
      "options": {
        "a": "• Prostředek k předávání dat mezi procesy bez sdílené paměti\n• Send = pošle zprávu do fronty\n• Receive = přijme zprávu z fronty",
        "b": "• Na začátku je fronta prázdná, procesy mají sdílenou proměnnou X\n• Provádějící proces provede výpočet X a pak pošle send signalizující jeho dokončení\n• Čekající proces čeká na dokončení a pak použije výslednou hodnotu",
        "c": "• Do fronty zašleme tolik inicializačních zpráv, kolik procesů smí současně používat kód KS (typicky 1)\n• Vstupní sekce = volání receive\n• Výstupní sekce = volání send\n• První proces přijme init zprávu a vstoupí do KS, každé další volání receive je blokováno\ndokud není KS volná",
        "d": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení = Frontu zpráv lze použít jako sklad a je třeba inicializovat max počet položek ve frontě\n◦ Producent SEND data do fronty/skladu\n◦ Konzument RECEIVE z fronty/skladu"
      },
      "correct": "b",
      "correct_answer": "• Na začátku je fronta prázdná, procesy mají sdílenou proměnnou X\n• Provádějící proces provede výpočet X a pak pošle send signalizující jeho dokončení\n• Čekající proces čeká na dokončení a pak použije výslednou hodnotu",
      "explanation": "Správná možnost odpovídá původní kartičce: • Na začátku je fronta prázdná, procesy mají sdílenou proměnnou X • Provádějící proces provede výpočet X a pak pošle send signalizující jeho dokončení • Čekající proces čeká na dokončení a pak použije výslednou hodnotu Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-22-01",
        "b": "bosys-22-04",
        "c": "bosys-22-03",
        "d": "bosys-22-05"
      },
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-22-05",
      "source_card_id": "bosys-22-05",
      "stable_id": "0ad1908b",
      "section_index": 22,
      "section": "Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Definice problému svázaných producentů a konzumentů a jeho řešení pomocí fronty zpráv.",
      "options": {
        "a": "• Do fronty zašleme tolik inicializačních zpráv, kolik procesů smí současně používat kód KS (typicky 1)\n• Vstupní sekce = volání receive\n• Výstupní sekce = volání send\n• První proces přijme init zprávu a vstoupí do KS, každé další volání receive je blokováno\ndokud není KS volná",
        "b": "• Prostředek k předávání dat mezi procesy bez sdílené paměti\n• Send = pošle zprávu do fronty\n• Receive = přijme zprávu z fronty",
        "c": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení = Frontu zpráv lze použít jako sklad a je třeba inicializovat max počet položek ve frontě\n◦ Producent SEND data do fronty/skladu\n◦ Konzument RECEIVE z fronty/skladu",
        "d": "• Send = Neblokující, je-li ve frontě místo a blokující pokud je fronta plná\n• Receive = Neblokující, je-li ve frontě dostupná zpráva a blokující, pokud je fronta prázdná"
      },
      "correct": "c",
      "correct_answer": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení = Frontu zpráv lze použít jako sklad a je třeba inicializovat max počet položek ve frontě\n◦ Producent SEND data do fronty/skladu\n◦ Konzument RECEIVE z fronty/skladu",
      "explanation": "Správná možnost odpovídá původní kartičce: • Jeden nebo více procesů generující data (producent) a ukládá je do skladu ◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu • Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný • Řešení = Frontu zpráv lze použít jako sklad a je třeba inicializovat max počet položek ve frontě ◦ Producent SEND… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-22-03",
        "b": "bosys-22-01",
        "c": "bosys-22-05",
        "d": "bosys-22-02"
      },
      "tags": [
        "BOSYS",
        "sekce-22",
        "nastroj-os-predavani-zprav-popis-systemovych-volani-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-23-01",
      "source_card_id": "bosys-23-01",
      "stable_id": "d5c464a8",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis konceptu monitoru: jeho účel, struktura a základní vlastnosti.",
      "options": {
        "a": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení: v monitoru definujeme pole skladu, počet položek ve skladu, indexy pro volné a obsazené pozice a podm. proměnné signalizující obsazenost skladu\n• Při vkládání kontrolujeme, zda je sklad plný, pokud ano, čekáme na uvolnění\n→ jinak přidáme položku a navýšíme celkový počet položek\n• Při odebírání kontrolujeme, zda je sklad prázdný, pokud ano, čekáme na vložení položky\n→ jinak odebereme položku a snížíme celkový počet položek",
        "b": "• Monitor zaručuje vzáj. vyluč. při spouštění svých funkcí\n• Stačí deklarovat sdílená data v monitoru a umístit KS do jeho funkce",
        "c": "• Pokud má jedno vlákno provést akci, na kterou musí čekat jiné vlákno\n→ pro synch. lze použít podmínkovou proměnnou monitoru v kombinaci s proměnnou vypovídající o stavu dokončení akce",
        "d": "• Nástroj pro řešení vzájemného vylučování a synchronizace\n• Konstrukce velmi podobná třídě\n• Je to blok kódu s vlastními daty a metodami, do kterého může najednou vstoupit pouze jedno vlákno"
      },
      "correct": "d",
      "correct_answer": "• Nástroj pro řešení vzájemného vylučování a synchronizace\n• Konstrukce velmi podobná třídě\n• Je to blok kódu s vlastními daty a metodami, do kterého může najednou vstoupit pouze jedno vlákno",
      "explanation": "Správná možnost odpovídá původní kartičce: • Nástroj pro řešení vzájemného vylučování a synchronizace • Konstrukce velmi podobná třídě • Je to blok kódu s vlastními daty a metodami, do kterého může najednou vstoupit pouze jedno vlákno Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-23-04",
        "b": "bosys-23-02",
        "c": "bosys-23-03",
        "d": "bosys-23-01"
      },
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a",
        "abcd-test"
      ],
      "points_hint": "2 + 2"
    },
    {
      "id": "bosys-abcd-23-02",
      "source_card_id": "bosys-23-02",
      "stable_id": "fd948369",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Popis řešení KS pomocí monitoru.",
      "options": {
        "a": "• Monitor zaručuje vzáj. vyluč. při spouštění svých funkcí\n• Stačí deklarovat sdílená data v monitoru a umístit KS do jeho funkce",
        "b": "• Pokud má jedno vlákno provést akci, na kterou musí čekat jiné vlákno\n→ pro synch. lze použít podmínkovou proměnnou monitoru v kombinaci s proměnnou vypovídající o stavu dokončení akce",
        "c": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení: v monitoru definujeme pole skladu, počet položek ve skladu, indexy pro volné a obsazené pozice a podm. proměnné signalizující obsazenost skladu\n• Při vkládání kontrolujeme, zda je sklad plný, pokud ano, čekáme na uvolnění\n→ jinak přidáme položku a navýšíme celkový počet položek\n• Při odebírání kontrolujeme, zda je sklad prázdný, pokud ano, čekáme na vložení položky\n→ jinak odebereme položku a snížíme celkový počet položek",
        "d": "• Nástroj pro řešení vzájemného vylučování a synchronizace\n• Konstrukce velmi podobná třídě\n• Je to blok kódu s vlastními daty a metodami, do kterého může najednou vstoupit pouze jedno vlákno"
      },
      "correct": "a",
      "correct_answer": "• Monitor zaručuje vzáj. vyluč. při spouštění svých funkcí\n• Stačí deklarovat sdílená data v monitoru a umístit KS do jeho funkce",
      "explanation": "Správná možnost odpovídá původní kartičce: • Monitor zaručuje vzáj. vyluč. při spouštění svých funkcí • Stačí deklarovat sdílená data v monitoru a umístit KS do jeho funkce Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-23-02",
        "b": "bosys-23-03",
        "c": "bosys-23-04",
        "d": "bosys-23-01"
      },
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-23-03",
      "source_card_id": "bosys-23-03",
      "stable_id": "aa8166d3",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis řešení synchronizace vláken pomocí monitoru.",
      "options": {
        "a": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení: v monitoru definujeme pole skladu, počet položek ve skladu, indexy pro volné a obsazené pozice a podm. proměnné signalizující obsazenost skladu\n• Při vkládání kontrolujeme, zda je sklad plný, pokud ano, čekáme na uvolnění\n→ jinak přidáme položku a navýšíme celkový počet položek\n• Při odebírání kontrolujeme, zda je sklad prázdný, pokud ano, čekáme na vložení položky\n→ jinak odebereme položku a snížíme celkový počet položek",
        "b": "• Nástroj pro řešení vzájemného vylučování a synchronizace\n• Konstrukce velmi podobná třídě\n• Je to blok kódu s vlastními daty a metodami, do kterého může najednou vstoupit pouze jedno vlákno",
        "c": "• Pokud má jedno vlákno provést akci, na kterou musí čekat jiné vlákno\n→ pro synch. lze použít podmínkovou proměnnou monitoru v kombinaci s proměnnou vypovídající o stavu dokončení akce",
        "d": "• Monitor zaručuje vzáj. vyluč. při spouštění svých funkcí\n• Stačí deklarovat sdílená data v monitoru a umístit KS do jeho funkce"
      },
      "correct": "c",
      "correct_answer": "• Pokud má jedno vlákno provést akci, na kterou musí čekat jiné vlákno\n→ pro synch. lze použít podmínkovou proměnnou monitoru v kombinaci s proměnnou vypovídající o stavu dokončení akce",
      "explanation": "Správná možnost odpovídá původní kartičce: • Pokud má jedno vlákno provést akci, na kterou musí čekat jiné vlákno → pro synch. lze použít podmínkovou proměnnou monitoru v kombinaci s proměnnou vypovídající o stavu dokončení akce Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-23-04",
        "b": "bosys-23-01",
        "c": "bosys-23-03",
        "d": "bosys-23-02"
      },
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-23-04",
      "source_card_id": "bosys-23-04",
      "stable_id": "d9663f1c",
      "section_index": 23,
      "section": "Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Definice problému svázaných producentů a konzumentů a jeho řešení pomocí monitoru, podmínky použité u synchronizace a zdůvodnění jejich použití.",
      "options": {
        "a": "• Nástroj pro řešení vzájemného vylučování a synchronizace\n• Konstrukce velmi podobná třídě\n• Je to blok kódu s vlastními daty a metodami, do kterého může najednou vstoupit pouze jedno vlákno",
        "b": "• Monitor zaručuje vzáj. vyluč. při spouštění svých funkcí\n• Stačí deklarovat sdílená data v monitoru a umístit KS do jeho funkce",
        "c": "• Pokud má jedno vlákno provést akci, na kterou musí čekat jiné vlákno\n→ pro synch. lze použít podmínkovou proměnnou monitoru v kombinaci s proměnnou vypovídající o stavu dokončení akce",
        "d": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení: v monitoru definujeme pole skladu, počet položek ve skladu, indexy pro volné a obsazené pozice a podm. proměnné signalizující obsazenost skladu\n• Při vkládání kontrolujeme, zda je sklad plný, pokud ano, čekáme na uvolnění\n→ jinak přidáme položku a navýšíme celkový počet položek\n• Při odebírání kontrolujeme, zda je sklad prázdný, pokud ano, čekáme na vložení položky\n→ jinak odebereme položku a snížíme celkový počet položek"
      },
      "correct": "d",
      "correct_answer": "• Jeden nebo více procesů generující data (producent) a ukládá je do skladu\n◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu\n• Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný\n• Řešení: v monitoru definujeme pole skladu, počet položek ve skladu, indexy pro volné a obsazené pozice a podm. proměnné signalizující obsazenost skladu\n• Při vkládání kontrolujeme, zda je sklad plný, pokud ano, čekáme na uvolnění\n→ jinak přidáme položku a navýšíme celkový počet položek\n• Při odebírání kontrolujeme, zda je sklad prázdný, pokud ano, čekáme na vložení položky\n→ jinak odebereme položku a snížíme celkový počet položek",
      "explanation": "Správná možnost odpovídá původní kartičce: • Jeden nebo více procesů generující data (producent) a ukládá je do skladu ◦ a několik procesů zpracovávající tyto data (konzument), tedy berou ze skladu • Problém = producenti čekají, pokud je sklad plný a konzumenti, když je sklad prázdný • Řešení: v monitoru definujeme pole skladu, počet položek ve skladu, indexy pro volné a obsazené pozice a podm.… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-23-01",
        "b": "bosys-23-02",
        "c": "bosys-23-03",
        "d": "bosys-23-04"
      },
      "tags": [
        "BOSYS",
        "sekce-23",
        "nastroj-programovacich-jazyku-koncept-monitoru-problem-producentu-a",
        "abcd-test"
      ],
      "points_hint": "6"
    },
    {
      "id": "bosys-abcd-24-01",
      "source_card_id": "bosys-24-01",
      "stable_id": "978e7bc7",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis mutexu, účel a vlastnosti, popis funkcí.",
      "options": {
        "a": "• Speciální proměnná, pomocí které lze synchronizovat skupinu vláken\n• Vlákna se zastavují na bariéře, ta se odblokuje, když dorazí určitý počet vláken\n• pthread_barrier_init(&bar, &atrib, &count) = inicializace bariéry pro určitý počet\n• pthread_barrier_wait(&bar) = čekání na počet vláken\n◦ pokud se má provést nějaká jednorázová akce\n→ vrátí PTHREAD_BARRIER_SERIAL_THREAD jednomu vláknu, ostatním vrací 0\n• pthread_barrier_destroy(&bar) = uvolní prostředky spojené s bariérou",
        "b": "• Před vstupem do KS = pthread_mutex_lock\n• Po opuštění = pthread_mutex_unlock",
        "c": "• Mutex = zámek pro řízení přístupu do KS\n• Nechá vstoupit pouze jedno vlákno\n• pthread_mutex_init(&m, NULL) = inicializace mutexu\n• pthread_mutex_lock(&m) = zamkne mutex, vlákno čeká\n• pthread_mutex_unlock(&m) = odemkne mutex, vláko se probudí\n• pthread_mutex_destroy(&m) = uvolní prostředky spojené s mutexem",
        "d": "• Umožňuje vláknům čekat na nějakou událost\n• Událost je signalizována operací condition_signal\n• využívá testy, aby zjistil, zda je třeba čekat\n• používá se společně s Mutexem pro vzájemné vylučování\n• pthread_cond_wait(&cond, &mutex) = uspání vlákna mutexem (čekání na událost)\n• pthread_cond_signal(&cond) = probuzení jednoho vlákna v reakci na událost"
      },
      "correct": "c",
      "correct_answer": "• Mutex = zámek pro řízení přístupu do KS\n• Nechá vstoupit pouze jedno vlákno\n• pthread_mutex_init(&m, NULL) = inicializace mutexu\n• pthread_mutex_lock(&m) = zamkne mutex, vlákno čeká\n• pthread_mutex_unlock(&m) = odemkne mutex, vláko se probudí\n• pthread_mutex_destroy(&m) = uvolní prostředky spojené s mutexem",
      "explanation": "Správná možnost odpovídá původní kartičce: • Mutex = zámek pro řízení přístupu do KS • Nechá vstoupit pouze jedno vlákno • pthread_mutex_init(&m, NULL) = inicializace mutexu • pthread_mutex_lock(&m) = zamkne mutex, vlákno čeká • pthread_mutex_unlock(&m) = odemkne mutex, vláko se probudí • pthread_mutex_destroy(&m) = uvolní prostředky spojené s mutexem Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-24-03",
        "b": "bosys-24-02",
        "c": "bosys-24-01",
        "d": "bosys-24-04"
      },
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-24-02",
      "source_card_id": "bosys-24-02",
      "stable_id": "6551816c",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Způsob použití mutexu.",
      "options": {
        "a": "• Před vstupem do KS = pthread_mutex_lock\n• Po opuštění = pthread_mutex_unlock",
        "b": "• Umožňuje vláknům čekat na nějakou událost\n• Událost je signalizována operací condition_signal\n• využívá testy, aby zjistil, zda je třeba čekat\n• používá se společně s Mutexem pro vzájemné vylučování\n• pthread_cond_wait(&cond, &mutex) = uspání vlákna mutexem (čekání na událost)\n• pthread_cond_signal(&cond) = probuzení jednoho vlákna v reakci na událost",
        "c": "• Speciální proměnná, pomocí které lze synchronizovat skupinu vláken\n• Vlákna se zastavují na bariéře, ta se odblokuje, když dorazí určitý počet vláken\n• pthread_barrier_init(&bar, &atrib, &count) = inicializace bariéry pro určitý počet\n• pthread_barrier_wait(&bar) = čekání na počet vláken\n◦ pokud se má provést nějaká jednorázová akce\n→ vrátí PTHREAD_BARRIER_SERIAL_THREAD jednomu vláknu, ostatním vrací 0\n• pthread_barrier_destroy(&bar) = uvolní prostředky spojené s bariérou",
        "d": "• Mutex = zámek pro řízení přístupu do KS\n• Nechá vstoupit pouze jedno vlákno\n• pthread_mutex_init(&m, NULL) = inicializace mutexu\n• pthread_mutex_lock(&m) = zamkne mutex, vlákno čeká\n• pthread_mutex_unlock(&m) = odemkne mutex, vláko se probudí\n• pthread_mutex_destroy(&m) = uvolní prostředky spojené s mutexem"
      },
      "correct": "a",
      "correct_answer": "• Před vstupem do KS = pthread_mutex_lock\n• Po opuštění = pthread_mutex_unlock",
      "explanation": "Správná možnost odpovídá původní kartičce: • Před vstupem do KS = pthread_mutex_lock • Po opuštění = pthread_mutex_unlock Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-24-02",
        "b": "bosys-24-04",
        "c": "bosys-24-03",
        "d": "bosys-24-01"
      },
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-24-03",
      "source_card_id": "bosys-24-03",
      "stable_id": "5b255e96",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Bariéra: účel, použití a popis funkcí (včetně návratové hodnoty funkce čekání).",
      "options": {
        "a": "• Speciální proměnná, pomocí které lze synchronizovat skupinu vláken\n• Vlákna se zastavují na bariéře, ta se odblokuje, když dorazí určitý počet vláken\n• pthread_barrier_init(&bar, &atrib, &count) = inicializace bariéry pro určitý počet\n• pthread_barrier_wait(&bar) = čekání na počet vláken\n◦ pokud se má provést nějaká jednorázová akce\n→ vrátí PTHREAD_BARRIER_SERIAL_THREAD jednomu vláknu, ostatním vrací 0\n• pthread_barrier_destroy(&bar) = uvolní prostředky spojené s bariérou",
        "b": "• Mutex = zámek pro řízení přístupu do KS\n• Nechá vstoupit pouze jedno vlákno\n• pthread_mutex_init(&m, NULL) = inicializace mutexu\n• pthread_mutex_lock(&m) = zamkne mutex, vlákno čeká\n• pthread_mutex_unlock(&m) = odemkne mutex, vláko se probudí\n• pthread_mutex_destroy(&m) = uvolní prostředky spojené s mutexem",
        "c": "• Umožňuje vláknům čekat na nějakou událost\n• Událost je signalizována operací condition_signal\n• využívá testy, aby zjistil, zda je třeba čekat\n• používá se společně s Mutexem pro vzájemné vylučování\n• pthread_cond_wait(&cond, &mutex) = uspání vlákna mutexem (čekání na událost)\n• pthread_cond_signal(&cond) = probuzení jednoho vlákna v reakci na událost",
        "d": "• Před vstupem do KS = pthread_mutex_lock\n• Po opuštění = pthread_mutex_unlock"
      },
      "correct": "a",
      "correct_answer": "• Speciální proměnná, pomocí které lze synchronizovat skupinu vláken\n• Vlákna se zastavují na bariéře, ta se odblokuje, když dorazí určitý počet vláken\n• pthread_barrier_init(&bar, &atrib, &count) = inicializace bariéry pro určitý počet\n• pthread_barrier_wait(&bar) = čekání na počet vláken\n◦ pokud se má provést nějaká jednorázová akce\n→ vrátí PTHREAD_BARRIER_SERIAL_THREAD jednomu vláknu, ostatním vrací 0\n• pthread_barrier_destroy(&bar) = uvolní prostředky spojené s bariérou",
      "explanation": "Správná možnost odpovídá původní kartičce: • Speciální proměnná, pomocí které lze synchronizovat skupinu vláken • Vlákna se zastavují na bariéře, ta se odblokuje, když dorazí určitý počet vláken • pthread_barrier_init(&bar, &atrib, &count) = inicializace bariéry pro určitý počet • pthread_barrier_wait(&bar) = čekání na počet vláken ◦ pokud se má provést nějaká jednorázová akce → vrátí… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-24-03",
        "b": "bosys-24-01",
        "c": "bosys-24-04",
        "d": "bosys-24-02"
      },
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna",
        "abcd-test"
      ],
      "points_hint": "1 + 4"
    },
    {
      "id": "bosys-abcd-24-04",
      "source_card_id": "bosys-24-04",
      "stable_id": "5ac51bf8",
      "section_index": 24,
      "section": "Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Podmínková proměnná: účel, způsob použití a vlastnosti.",
      "options": {
        "a": "• Speciální proměnná, pomocí které lze synchronizovat skupinu vláken\n• Vlákna se zastavují na bariéře, ta se odblokuje, když dorazí určitý počet vláken\n• pthread_barrier_init(&bar, &atrib, &count) = inicializace bariéry pro určitý počet\n• pthread_barrier_wait(&bar) = čekání na počet vláken\n◦ pokud se má provést nějaká jednorázová akce\n→ vrátí PTHREAD_BARRIER_SERIAL_THREAD jednomu vláknu, ostatním vrací 0\n• pthread_barrier_destroy(&bar) = uvolní prostředky spojené s bariérou",
        "b": "• Umožňuje vláknům čekat na nějakou událost\n• Událost je signalizována operací condition_signal\n• využívá testy, aby zjistil, zda je třeba čekat\n• používá se společně s Mutexem pro vzájemné vylučování\n• pthread_cond_wait(&cond, &mutex) = uspání vlákna mutexem (čekání na událost)\n• pthread_cond_signal(&cond) = probuzení jednoho vlákna v reakci na událost",
        "c": "• Před vstupem do KS = pthread_mutex_lock\n• Po opuštění = pthread_mutex_unlock",
        "d": "• Mutex = zámek pro řízení přístupu do KS\n• Nechá vstoupit pouze jedno vlákno\n• pthread_mutex_init(&m, NULL) = inicializace mutexu\n• pthread_mutex_lock(&m) = zamkne mutex, vlákno čeká\n• pthread_mutex_unlock(&m) = odemkne mutex, vláko se probudí\n• pthread_mutex_destroy(&m) = uvolní prostředky spojené s mutexem"
      },
      "correct": "b",
      "correct_answer": "• Umožňuje vláknům čekat na nějakou událost\n• Událost je signalizována operací condition_signal\n• využívá testy, aby zjistil, zda je třeba čekat\n• používá se společně s Mutexem pro vzájemné vylučování\n• pthread_cond_wait(&cond, &mutex) = uspání vlákna mutexem (čekání na událost)\n• pthread_cond_signal(&cond) = probuzení jednoho vlákna v reakci na událost",
      "explanation": "Správná možnost odpovídá původní kartičce: • Umožňuje vláknům čekat na nějakou událost • Událost je signalizována operací condition_signal • využívá testy, aby zjistil, zda je třeba čekat • používá se společně s Mutexem pro vzájemné vylučování • pthread_cond_wait(&cond, &mutex) = uspání vlákna mutexem (čekání na událost) • pthread_cond_signal(&cond) = probuzení jednoho vlákna v reakci na událost Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-24-03",
        "b": "bosys-24-04",
        "c": "bosys-24-02",
        "d": "bosys-24-01"
      },
      "tags": [
        "BOSYS",
        "sekce-24",
        "nastroje-knihovny-posixovych-vlaken-mutex-bariera-podminkova-promenna",
        "abcd-test"
      ],
      "points_hint": "1 + 4"
    },
    {
      "id": "bosys-abcd-25-01",
      "source_card_id": "bosys-25-01",
      "stable_id": "79ce0ef8",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Definice stavu uváznutí (deadlock).",
      "options": {
        "a": "• je stav skupiny procesů/vláken, z nichž každý čeká na událost, kterou může vyvolat\nvýhradně jiný proces z této skupiny\n• TLDR: procesy uváznou a nemohou pokračovat",
        "b": "• Vzájemné vylučování prostředků = nelze sdílet prostředky procesu\n• Alokace a čekání = proces může požadovat o další prostředky\n• Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem\n• Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus\n◦ p1 -> p2 -> ... -> pn -> p1",
        "c": "• Prev. Vzáj. Vylučování = umožnění sdílení prostředků více procesy\n◦ spooling -> fronta požadavků pro přenos dat na periferiích\n• Prev. Alokace a čekání = procesy jsou přinuceny sdílet všechny zdroje naráz\n• Prev. Neodnímatelných prost. = lze zavést možnost násilného odebrání\n• Prev. Cyklického čekání = definování lineárního uspořádání prostředků\n◦ přidělovat pouze prostředky s vyšším pořadovým číslem",
        "d": "• Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu\n• Bankéř má finance a půjčuje je klientům\n• Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá\n• Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny\n• Nebezpečný stav = situace, kdy může nastat zablokování\n◦ pokud všechny procesy budou požadovat pro své dokončení maximum zdrojů a ani\njednomu nebude moci systém vyhovět\n• Nutný pevný počet prostředků"
      },
      "correct": "a",
      "correct_answer": "• je stav skupiny procesů/vláken, z nichž každý čeká na událost, kterou může vyvolat\nvýhradně jiný proces z této skupiny\n• TLDR: procesy uváznou a nemohou pokračovat",
      "explanation": "Správná možnost odpovídá původní kartičce: • je stav skupiny procesů/vláken, z nichž každý čeká na událost, kterou může vyvolat výhradně jiný proces z této skupiny • TLDR: procesy uváznou a nemohou pokračovat Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-25-01",
        "b": "bosys-25-03",
        "c": "bosys-25-05",
        "d": "bosys-25-06"
      },
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-25-02",
      "source_card_id": "bosys-25-02",
      "stable_id": "8b2aad7f",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Definice stavu vyhladovění (starvation), příklad.",
      "options": {
        "a": "• Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu\n• Bankéř má finance a půjčuje je klientům\n• Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá\n• Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny\n• Nebezpečný stav = situace, kdy může nastat zablokování\n◦ pokud všechny procesy budou požadovat pro své dokončení maximum zdrojů a ani\njednomu nebude moci systém vyhovět\n• Nutný pevný počet prostředků",
        "b": "• Situace, kdy proces/vlákno čeká nekonečně dlouho na přístup k prostředku\n• Zpracovávání procesů na základě předpokládané délky do dokončení (SJF Alg.)\n→ pokud neustále přicházejí nové krátké procesy, ty dlouhé se nikdy nedostanou ke KS",
        "c": "• je stav skupiny procesů/vláken, z nichž každý čeká na událost, kterou může vyvolat\nvýhradně jiný proces z této skupiny\n• TLDR: procesy uváznou a nemohou pokračovat",
        "d": "• Vzájemné vylučování prostředků = nelze sdílet prostředky procesu\n• Alokace a čekání = proces může požadovat o další prostředky\n• Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem\n• Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus\n◦ p1 -> p2 -> ... -> pn -> p1"
      },
      "correct": "b",
      "correct_answer": "• Situace, kdy proces/vlákno čeká nekonečně dlouho na přístup k prostředku\n• Zpracovávání procesů na základě předpokládané délky do dokončení (SJF Alg.)\n→ pokud neustále přicházejí nové krátké procesy, ty dlouhé se nikdy nedostanou ke KS",
      "explanation": "Správná možnost odpovídá původní kartičce: • Situace, kdy proces/vlákno čeká nekonečně dlouho na přístup k prostředku • Zpracovávání procesů na základě předpokládané délky do dokončení (SJF Alg.) → pokud neustále přicházejí nové krátké procesy, ty dlouhé se nikdy nedostanou ke KS Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-25-06",
        "b": "bosys-25-02",
        "c": "bosys-25-01",
        "d": "bosys-25-03"
      },
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil",
        "abcd-test"
      ],
      "points_hint": "1"
    },
    {
      "id": "bosys-abcd-25-03",
      "source_card_id": "bosys-25-03",
      "stable_id": "f73659bb",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Vysvětlení podmínek pro vznik stavu uváznutí.",
      "options": {
        "a": "• Ignorování = pokud se děje velmi zřídka\n• Detekce a obnovení = násilné odebrání prostředku některému z procesů-> obnova/rollback\n• Prevence = negování jedné z podmínek vzniku\n• Vyhnutí = opatrná alokace zdrojů",
        "b": "• Vzájemné vylučování prostředků = nelze sdílet prostředky procesu\n• Alokace a čekání = proces může požadovat o další prostředky\n• Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem\n• Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus\n◦ p1 -> p2 -> ... -> pn -> p1",
        "c": "• Situace, kdy proces/vlákno čeká nekonečně dlouho na přístup k prostředku\n• Zpracovávání procesů na základě předpokládané délky do dokončení (SJF Alg.)\n→ pokud neustále přicházejí nové krátké procesy, ty dlouhé se nikdy nedostanou ke KS",
        "d": "• Prev. Vzáj. Vylučování = umožnění sdílení prostředků více procesy\n◦ spooling -> fronta požadavků pro přenos dat na periferiích\n• Prev. Alokace a čekání = procesy jsou přinuceny sdílet všechny zdroje naráz\n• Prev. Neodnímatelných prost. = lze zavést možnost násilného odebrání\n• Prev. Cyklického čekání = definování lineárního uspořádání prostředků\n◦ přidělovat pouze prostředky s vyšším pořadovým číslem"
      },
      "correct": "b",
      "correct_answer": "• Vzájemné vylučování prostředků = nelze sdílet prostředky procesu\n• Alokace a čekání = proces může požadovat o další prostředky\n• Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem\n• Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus\n◦ p1 -> p2 -> ... -> pn -> p1",
      "explanation": "Správná možnost odpovídá původní kartičce: • Vzájemné vylučování prostředků = nelze sdílet prostředky procesu • Alokace a čekání = proces může požadovat o další prostředky • Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem • Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus ◦ p1 -> p2 -> ... -> pn -> p1 Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-25-04",
        "b": "bosys-25-03",
        "c": "bosys-25-02",
        "d": "bosys-25-05"
      },
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-25-04",
      "source_card_id": "bosys-25-04",
      "stable_id": "0b58c3f0",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Přístupy k řešení odstranění vzniklého stavu uváznutí.",
      "options": {
        "a": "• je stav skupiny procesů/vláken, z nichž každý čeká na událost, kterou může vyvolat\nvýhradně jiný proces z této skupiny\n• TLDR: procesy uváznou a nemohou pokračovat",
        "b": "• Ignorování = pokud se děje velmi zřídka\n• Detekce a obnovení = násilné odebrání prostředku některému z procesů-> obnova/rollback\n• Prevence = negování jedné z podmínek vzniku\n• Vyhnutí = opatrná alokace zdrojů",
        "c": "• Prev. Vzáj. Vylučování = umožnění sdílení prostředků více procesy\n◦ spooling -> fronta požadavků pro přenos dat na periferiích\n• Prev. Alokace a čekání = procesy jsou přinuceny sdílet všechny zdroje naráz\n• Prev. Neodnímatelných prost. = lze zavést možnost násilného odebrání\n• Prev. Cyklického čekání = definování lineárního uspořádání prostředků\n◦ přidělovat pouze prostředky s vyšším pořadovým číslem",
        "d": "• Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu\n• Bankéř má finance a půjčuje je klientům\n• Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá\n• Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny\n• Nebezpečný stav = situace, kdy může nastat zablokování\n◦ pokud všechny procesy budou požadovat pro své dokončení maximum zdrojů a ani\njednomu nebude moci systém vyhovět\n• Nutný pevný počet prostředků"
      },
      "correct": "b",
      "correct_answer": "• Ignorování = pokud se děje velmi zřídka\n• Detekce a obnovení = násilné odebrání prostředku některému z procesů-> obnova/rollback\n• Prevence = negování jedné z podmínek vzniku\n• Vyhnutí = opatrná alokace zdrojů",
      "explanation": "Správná možnost odpovídá původní kartičce: • Ignorování = pokud se děje velmi zřídka • Detekce a obnovení = násilné odebrání prostředku některému z procesů-> obnova/rollback • Prevence = negování jedné z podmínek vzniku • Vyhnutí = opatrná alokace zdrojů Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-25-01",
        "b": "bosys-25-04",
        "c": "bosys-25-05",
        "d": "bosys-25-06"
      },
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-25-05",
      "source_card_id": "bosys-25-05",
      "stable_id": "6aaf6f1b",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Způsoby prevence vzniku stavu uváznutí.",
      "options": {
        "a": "• Vzájemné vylučování prostředků = nelze sdílet prostředky procesu\n• Alokace a čekání = proces může požadovat o další prostředky\n• Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem\n• Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus\n◦ p1 -> p2 -> ... -> pn -> p1",
        "b": "• Prev. Vzáj. Vylučování = umožnění sdílení prostředků více procesy\n◦ spooling -> fronta požadavků pro přenos dat na periferiích\n• Prev. Alokace a čekání = procesy jsou přinuceny sdílet všechny zdroje naráz\n• Prev. Neodnímatelných prost. = lze zavést možnost násilného odebrání\n• Prev. Cyklického čekání = definování lineárního uspořádání prostředků\n◦ přidělovat pouze prostředky s vyšším pořadovým číslem",
        "c": "• Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu\n• Bankéř má finance a půjčuje je klientům\n• Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá\n• Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny\n• Nebezpečný stav = situace, kdy může nastat zablokování\n◦ pokud všechny procesy budou požadovat pro své dokončení maximum zdrojů a ani\njednomu nebude moci systém vyhovět\n• Nutný pevný počet prostředků",
        "d": "• Ignorování = pokud se děje velmi zřídka\n• Detekce a obnovení = násilné odebrání prostředku některému z procesů-> obnova/rollback\n• Prevence = negování jedné z podmínek vzniku\n• Vyhnutí = opatrná alokace zdrojů"
      },
      "correct": "b",
      "correct_answer": "• Prev. Vzáj. Vylučování = umožnění sdílení prostředků více procesy\n◦ spooling -> fronta požadavků pro přenos dat na periferiích\n• Prev. Alokace a čekání = procesy jsou přinuceny sdílet všechny zdroje naráz\n• Prev. Neodnímatelných prost. = lze zavést možnost násilného odebrání\n• Prev. Cyklického čekání = definování lineárního uspořádání prostředků\n◦ přidělovat pouze prostředky s vyšším pořadovým číslem",
      "explanation": "Správná možnost odpovídá původní kartičce: • Prev. Vzáj. Vylučování = umožnění sdílení prostředků více procesy ◦ spooling -> fronta požadavků pro přenos dat na periferiích • Prev. Alokace a čekání = procesy jsou přinuceny sdílet všechny zdroje naráz • Prev. Neodnímatelných prost. = lze zavést možnost násilného odebrání • Prev. Cyklického čekání = definování lineárního uspořádání prostředků ◦… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-25-03",
        "b": "bosys-25-05",
        "c": "bosys-25-06",
        "d": "bosys-25-04"
      },
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-25-06",
      "source_card_id": "bosys-25-06",
      "stable_id": "7e436749",
      "section_index": 25,
      "section": "Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Popis bankéřova algoritmu aplikovaného na procesy (s popisem stavů).",
      "options": {
        "a": "• Situace, kdy proces/vlákno čeká nekonečně dlouho na přístup k prostředku\n• Zpracovávání procesů na základě předpokládané délky do dokončení (SJF Alg.)\n→ pokud neustále přicházejí nové krátké procesy, ty dlouhé se nikdy nedostanou ke KS",
        "b": "• Ignorování = pokud se děje velmi zřídka\n• Detekce a obnovení = násilné odebrání prostředku některému z procesů-> obnova/rollback\n• Prevence = negování jedné z podmínek vzniku\n• Vyhnutí = opatrná alokace zdrojů",
        "c": "• Vzájemné vylučování prostředků = nelze sdílet prostředky procesu\n• Alokace a čekání = proces může požadovat o další prostředky\n• Neodnímatelné prostředky = prostředky mohou být uvolněny pouze vlastnícím procesem\n• Cyklické čekání = řetěz vzájemně čekajících procesů uzavírá cyklus\n◦ p1 -> p2 -> ... -> pn -> p1",
        "d": "• Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu\n• Bankéř má finance a půjčuje je klientům\n• Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá\n• Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny\n• Nebezpečný stav = situace, kdy může nastat zablokování\n◦ pokud všechny procesy budou požadovat pro své dokončení maximum zdrojů a ani\njednomu nebude moci systém vyhovět\n• Nutný pevný počet prostředků"
      },
      "correct": "d",
      "correct_answer": "• Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu\n• Bankéř má finance a půjčuje je klientům\n• Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá\n• Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny\n• Nebezpečný stav = situace, kdy může nastat zablokování\n◦ pokud všechny procesy budou požadovat pro své dokončení maximum zdrojů a ani\njednomu nebude moci systém vyhovět\n• Nutný pevný počet prostředků",
      "explanation": "Správná možnost odpovídá původní kartičce: • Odmítání nebo odložení požadavků, které by uvedly systém do nebezpečného stavu • Bankéř má finance a půjčuje je klientům • Nesmí nastat situace, kdy má vyplatit klientovi částku, kterou nemá • Bezpečný stav = není stav zablokování, a všechny procesy mohou být dokončeny • Nebezpečný stav = situace, kdy může nastat zablokování ◦ pokud všechny procesy budou… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-25-02",
        "b": "bosys-25-04",
        "c": "bosys-25-03",
        "d": "bosys-25-06"
      },
      "tags": [
        "BOSYS",
        "sekce-25",
        "stav-uvaznuti-deadlock-a-vyhladoveni-definice-a-rozdil",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-26-01",
      "source_card_id": "bosys-26-01",
      "stable_id": "aafccbd0",
      "section_index": 26,
      "section": "IPC: komunikace procesů a vláken, možné prostředky komunikace.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Možné prostředky pro komunikaci procesů / vláken.",
      "options": {
        "a": "• socket (domain, type, protocol) = vytvoří nový komunikační bod\n• bind (sockfd, addr, addrlen) = přidělí lokální adresy a porty (IP+port)\n• listen (sockfd, backlog) = přepne na poslechový stav (TCP)\n• accept (sockfd, addr, addlen*) = přijme příchozí spojení, vrátí nový socket\n• connect (sockfd, addr, addrlen*) = naváže spojení na server (TCP)\n• send ()/recv() = streamované odesílaní a příjem\n• sendto()/recvfrom() = datagramové (UDP) komunikace\n• close(sockfd) = uzavře socket",
        "b": "• Pipes = jednosměrná komunikace mezi příbuznými (ze stejného rodiče) procesy\n• Fronty zpráv = procesy posílají strukturované zprávy\n• Shared memory = procesy sdílejí část paměti, nejrychlejší, vyžaduje synchronizaci\n• Sockets = obecný prostředek pro kom. mezi počítači, podporuje TCP i UDP\n• Signals = asynchroní notifikace mezi procesy, lze jimi například ukončit/přerušit proces\n• Semofory = řízení přístupu ke sdíleným prostředkům a synchronizace procesů/vláken\n• Bariéra = synchronizace skupiny procesů/vláken\n• Monitor = vzájemné vylučování a synchronizace",
        "c": "• Pipes(roury)\n• Fronty zpráv\n• Shared Memory\n• Sockets\n• Signals\n• Semafor, bariéra, monitor",
        "d": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana"
      },
      "correct": "c",
      "correct_answer": "• Pipes(roury)\n• Fronty zpráv\n• Shared Memory\n• Sockets\n• Signals\n• Semafor, bariéra, monitor",
      "explanation": "Správná možnost odpovídá původní kartičce: • Pipes(roury) • Fronty zpráv • Shared Memory • Sockets • Signals • Semafor, bariéra, monitor Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-26-03",
        "b": "bosys-26-02",
        "c": "bosys-26-01",
        "d": "bosys-27-04"
      },
      "tags": [
        "BOSYS",
        "sekce-26",
        "ipc-komunikace-procesu-a-vlaken-mozne-prostredky-komunikace",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-26-02",
      "source_card_id": "bosys-26-02",
      "stable_id": "5d3e8a4c",
      "section_index": 26,
      "section": "IPC: komunikace procesů a vláken, možné prostředky komunikace.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Krátká charakteristika prostředků pro komunikaci procesů / vláken.",
      "options": {
        "a": "• Pipes(roury)\n• Fronty zpráv\n• Shared Memory\n• Sockets\n• Signals\n• Semafor, bariéra, monitor",
        "b": "• socket (domain, type, protocol) = vytvoří nový komunikační bod\n• bind (sockfd, addr, addrlen) = přidělí lokální adresy a porty (IP+port)\n• listen (sockfd, backlog) = přepne na poslechový stav (TCP)\n• accept (sockfd, addr, addlen*) = přijme příchozí spojení, vrátí nový socket\n• connect (sockfd, addr, addrlen*) = naváže spojení na server (TCP)\n• send ()/recv() = streamované odesílaní a příjem\n• sendto()/recvfrom() = datagramové (UDP) komunikace\n• close(sockfd) = uzavře socket",
        "c": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS",
        "d": "• Pipes = jednosměrná komunikace mezi příbuznými (ze stejného rodiče) procesy\n• Fronty zpráv = procesy posílají strukturované zprávy\n• Shared memory = procesy sdílejí část paměti, nejrychlejší, vyžaduje synchronizaci\n• Sockets = obecný prostředek pro kom. mezi počítači, podporuje TCP i UDP\n• Signals = asynchroní notifikace mezi procesy, lze jimi například ukončit/přerušit proces\n• Semofory = řízení přístupu ke sdíleným prostředkům a synchronizace procesů/vláken\n• Bariéra = synchronizace skupiny procesů/vláken\n• Monitor = vzájemné vylučování a synchronizace"
      },
      "correct": "d",
      "correct_answer": "• Pipes = jednosměrná komunikace mezi příbuznými (ze stejného rodiče) procesy\n• Fronty zpráv = procesy posílají strukturované zprávy\n• Shared memory = procesy sdílejí část paměti, nejrychlejší, vyžaduje synchronizaci\n• Sockets = obecný prostředek pro kom. mezi počítači, podporuje TCP i UDP\n• Signals = asynchroní notifikace mezi procesy, lze jimi například ukončit/přerušit proces\n• Semofory = řízení přístupu ke sdíleným prostředkům a synchronizace procesů/vláken\n• Bariéra = synchronizace skupiny procesů/vláken\n• Monitor = vzájemné vylučování a synchronizace",
      "explanation": "Správná možnost odpovídá původní kartičce: • Pipes = jednosměrná komunikace mezi příbuznými (ze stejného rodiče) procesy • Fronty zpráv = procesy posílají strukturované zprávy • Shared memory = procesy sdílejí část paměti, nejrychlejší, vyžaduje synchronizaci • Sockets = obecný prostředek pro kom. mezi počítači, podporuje TCP i UDP • Signals = asynchroní notifikace mezi procesy, lze jimi například… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-26-01",
        "b": "bosys-26-03",
        "c": "bosys-27-03",
        "d": "bosys-26-02"
      },
      "tags": [
        "BOSYS",
        "sekce-26",
        "ipc-komunikace-procesu-a-vlaken-mozne-prostredky-komunikace",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-26-03",
      "source_card_id": "bosys-26-03",
      "stable_id": "7d4aa97b",
      "section_index": 26,
      "section": "IPC: komunikace procesů a vláken, možné prostředky komunikace.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis funkcí pro sokety (alespoň pěti typů).",
      "options": {
        "a": "• socket (domain, type, protocol) = vytvoří nový komunikační bod\n• bind (sockfd, addr, addrlen) = přidělí lokální adresy a porty (IP+port)\n• listen (sockfd, backlog) = přepne na poslechový stav (TCP)\n• accept (sockfd, addr, addlen*) = přijme příchozí spojení, vrátí nový socket\n• connect (sockfd, addr, addrlen*) = naváže spojení na server (TCP)\n• send ()/recv() = streamované odesílaní a příjem\n• sendto()/recvfrom() = datagramové (UDP) komunikace\n• close(sockfd) = uzavře socket",
        "b": "• Pipes = jednosměrná komunikace mezi příbuznými (ze stejného rodiče) procesy\n• Fronty zpráv = procesy posílají strukturované zprávy\n• Shared memory = procesy sdílejí část paměti, nejrychlejší, vyžaduje synchronizaci\n• Sockets = obecný prostředek pro kom. mezi počítači, podporuje TCP i UDP\n• Signals = asynchroní notifikace mezi procesy, lze jimi například ukončit/přerušit proces\n• Semofory = řízení přístupu ke sdíleným prostředkům a synchronizace procesů/vláken\n• Bariéra = synchronizace skupiny procesů/vláken\n• Monitor = vzájemné vylučování a synchronizace",
        "c": "• Pipes(roury)\n• Fronty zpráv\n• Shared Memory\n• Sockets\n• Signals\n• Semafor, bariéra, monitor",
        "d": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana"
      },
      "correct": "a",
      "correct_answer": "• socket (domain, type, protocol) = vytvoří nový komunikační bod\n• bind (sockfd, addr, addrlen) = přidělí lokální adresy a porty (IP+port)\n• listen (sockfd, backlog) = přepne na poslechový stav (TCP)\n• accept (sockfd, addr, addlen*) = přijme příchozí spojení, vrátí nový socket\n• connect (sockfd, addr, addrlen*) = naváže spojení na server (TCP)\n• send ()/recv() = streamované odesílaní a příjem\n• sendto()/recvfrom() = datagramové (UDP) komunikace\n• close(sockfd) = uzavře socket",
      "explanation": "Správná možnost odpovídá původní kartičce: • socket (domain, type, protocol) = vytvoří nový komunikační bod • bind (sockfd, addr, addrlen) = přidělí lokální adresy a porty (IP+port) • listen (sockfd, backlog) = přepne na poslechový stav (TCP) • accept (sockfd, addr, addlen*) = přijme příchozí spojení, vrátí nový socket • connect (sockfd, addr, addrlen*) = naváže spojení na server (TCP) • send… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-26-03",
        "b": "bosys-26-02",
        "c": "bosys-26-01",
        "d": "bosys-27-04"
      },
      "tags": [
        "BOSYS",
        "sekce-26",
        "ipc-komunikace-procesu-a-vlaken-mozne-prostredky-komunikace",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-27-01",
      "source_card_id": "bosys-27-01",
      "stable_id": "23feab08",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis důvodů pro rozdělení disku na oddíly.",
      "options": {
        "a": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS",
        "b": "• Rozdělení logických oblastí (OS, data, záloha)\n• Možnost dual-bootu (možnost instalace vice OS)\n• Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek)\n• Řízení výkonu (různé parametry a souborové systémy)",
        "c": "• Master Boot Record\n• prvních 512 B na disku, max. Velikost disku je 2 TB\n◦ bootloader 446 B + tabulka oddílů 64 B (každý 16 B) + hodnota platnosti 2 B\n• Max. 4 oddíly\n◦ 1-4 primární oddíly a pouze 1 rozšířený oddíl -> může obsahovat další logické oddíly",
        "d": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana"
      },
      "correct": "b",
      "correct_answer": "• Rozdělení logických oblastí (OS, data, záloha)\n• Možnost dual-bootu (možnost instalace vice OS)\n• Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek)\n• Řízení výkonu (různé parametry a souborové systémy)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Rozdělení logických oblastí (OS, data, záloha) • Možnost dual-bootu (možnost instalace vice OS) • Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek) • Řízení výkonu (různé parametry a souborové systémy) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-27-03",
        "b": "bosys-27-01",
        "c": "bosys-27-02",
        "d": "bosys-27-04"
      },
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-27-02",
      "source_card_id": "bosys-27-02",
      "stable_id": "2378920d",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Popis MBR a způsob dělení disku na oddíly.",
      "options": {
        "a": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS",
        "b": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana",
        "c": "• Master Boot Record\n• prvních 512 B na disku, max. Velikost disku je 2 TB\n◦ bootloader 446 B + tabulka oddílů 64 B (každý 16 B) + hodnota platnosti 2 B\n• Max. 4 oddíly\n◦ 1-4 primární oddíly a pouze 1 rozšířený oddíl -> může obsahovat další logické oddíly",
        "d": "• Rozdělení logických oblastí (OS, data, záloha)\n• Možnost dual-bootu (možnost instalace vice OS)\n• Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek)\n• Řízení výkonu (různé parametry a souborové systémy)"
      },
      "correct": "c",
      "correct_answer": "• Master Boot Record\n• prvních 512 B na disku, max. Velikost disku je 2 TB\n◦ bootloader 446 B + tabulka oddílů 64 B (každý 16 B) + hodnota platnosti 2 B\n• Max. 4 oddíly\n◦ 1-4 primární oddíly a pouze 1 rozšířený oddíl -> může obsahovat další logické oddíly",
      "explanation": "Správná možnost odpovídá původní kartičce: • Master Boot Record • prvních 512 B na disku, max. Velikost disku je 2 TB ◦ bootloader 446 B + tabulka oddílů 64 B (každý 16 B) + hodnota platnosti 2 B • Max. 4 oddíly ◦ 1-4 primární oddíly a pouze 1 rozšířený oddíl -> může obsahovat další logické oddíly Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-27-03",
        "b": "bosys-27-04",
        "c": "bosys-27-02",
        "d": "bosys-27-01"
      },
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-27-03",
      "source_card_id": "bosys-27-03",
      "stable_id": "43c5e648",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis typů oddílů (pro dělení MBR).",
      "options": {
        "a": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS",
        "b": "• Master Boot Record\n• prvních 512 B na disku, max. Velikost disku je 2 TB\n◦ bootloader 446 B + tabulka oddílů 64 B (každý 16 B) + hodnota platnosti 2 B\n• Max. 4 oddíly\n◦ 1-4 primární oddíly a pouze 1 rozšířený oddíl -> může obsahovat další logické oddíly",
        "c": "• Rozdělení logických oblastí (OS, data, záloha)\n• Možnost dual-bootu (možnost instalace vice OS)\n• Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek)\n• Řízení výkonu (různé parametry a souborové systémy)",
        "d": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana"
      },
      "correct": "a",
      "correct_answer": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS",
      "explanation": "Správná možnost odpovídá původní kartičce: • Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS) • Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly • Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-27-03",
        "b": "bosys-27-02",
        "c": "bosys-27-01",
        "d": "bosys-27-04"
      },
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-27-04",
      "source_card_id": "bosys-27-04",
      "stable_id": "a148602d",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Charakterizace GPT.",
      "options": {
        "a": "• Rozdělení logických oblastí (OS, data, záloha)\n• Možnost dual-bootu (možnost instalace vice OS)\n• Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek)\n• Řízení výkonu (různé parametry a souborové systémy)",
        "b": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS",
        "c": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana",
        "d": "• Master Boot Record\n• prvních 512 B na disku, max. Velikost disku je 2 TB\n◦ bootloader 446 B + tabulka oddílů 64 B (každý 16 B) + hodnota platnosti 2 B\n• Max. 4 oddíly\n◦ 1-4 primární oddíly a pouze 1 rozšířený oddíl -> může obsahovat další logické oddíly"
      },
      "correct": "c",
      "correct_answer": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana",
      "explanation": "Správná možnost odpovídá původní kartičce: • GUID (Globally Unique ID) Partition Table = moderní náhrada MBR • až 128 oddílů bez nutnosti logických oddílů • používá 64bitové adresování = disk větší jak 2 TB • Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození • CRC32 ochrana Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-27-01",
        "b": "bosys-27-03",
        "c": "bosys-27-04",
        "d": "bosys-27-02"
      },
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-27-05",
      "source_card_id": "bosys-27-05",
      "stable_id": "9c6e9adf",
      "section_index": 27,
      "section": "Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Vysvětlení rozdílů mezi odkládacím prostorem (swap) na samostatném diskovém oddíle a v souboru.",
      "options": {
        "a": "• GUID (Globally Unique ID) Partition Table = moderní náhrada MBR\n• až 128 oddílů bez nutnosti logických oddílů\n• používá 64bitové adresování = disk větší jak 2 TB\n• Ukládá tabulku oddílů na začátek i na konec disku -> odolnost proti poškození\n• CRC32 ochrana",
        "b": "• Rozdělení logických oblastí (OS, data, záloha)\n• Možnost dual-bootu (možnost instalace vice OS)\n• Izolace chyb (např. poškození jednoho oddílu neovlivní zbytek)\n• Řízení výkonu (různé parametry a souborové systémy)",
        "c": "• Oddíl = trochu rychlejší, jednodušší, nelze dynamicky zvětšit\n• Soubor = flexibilnější velikost, snadná správa, mírně pomalejší (dodatečná vrstva FS)",
        "d": "• Primární (max. 4) = obsahuje FS a OS, jeden označen jako aktivní (má OS)\n• Extended (max. 1, obsahuje logické pododdíly) = neobsahuje data, pouze pododdíly\n• Logické (v rámci extended) = bez limitů, pro data, zálohy, další OS"
      },
      "correct": "c",
      "correct_answer": "• Oddíl = trochu rychlejší, jednodušší, nelze dynamicky zvětšit\n• Soubor = flexibilnější velikost, snadná správa, mírně pomalejší (dodatečná vrstva FS)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Oddíl = trochu rychlejší, jednodušší, nelze dynamicky zvětšit • Soubor = flexibilnější velikost, snadná správa, mírně pomalejší (dodatečná vrstva FS) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-27-04",
        "b": "bosys-27-01",
        "c": "bosys-27-05",
        "d": "bosys-27-03"
      },
      "tags": [
        "BOSYS",
        "sekce-27",
        "deleni-disku-na-oddily-zavadec-os-duvody-deleni",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-28-01",
      "source_card_id": "bosys-28-01",
      "stable_id": "d60cf121",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis obecné struktury souborových systémů a jejich metadat.",
      "options": {
        "a": "• FS umožňuje uživatelům a procesům přístup k datům uložených v souborech\n• Soubory jsou univerzální forma dlouhodobého uložení dat v sekundární paměti\n• Jsou organizovány pomocí adresářů uspořádaných do stromu s jedním kořenem\n• Cesta vyjadřuje logické umístění souboru v adresové struktuře\n◦ rozlišujeme absolutní (od kořenového adresáře) a relativní (od aktuálního adresáře) cesty",
        "b": "• UID vlastníka\n• GID skupiny\n• Název\n• Velikost souboru (v bajtech)\n• Časové údaje= vytvoření, poslední úpravy, poslední přístup\n• Počet odkazů (link count)\n• Typ souboru (regulární, adresář...)",
        "c": "→ Neobsahují reálná data, pouze na ně odkazují, nebo reprezentují jinou entitu\n• Hard link = nové jméno pro existující soubor, včetně jeho metadat\n• Symbolic link = soubor, v jehož datové části je uvedeno nové jméno\n• Named pipe = jednosměrný komunikační nástroj v podobě souboru\n◦ má 2 nezávislé ukazatele (pro čtení a pro zápis)\n• Bloková zařízení = náhodný přístup po blokích (disky)\n• Znaková zařízení = proudový přístup po bajtech (terminály, tiskárny, skenery)",
        "d": "• Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata\n◦ jedná se spíše o vlastnost souborového systému\n◦ nové a původní jméno souboru nelze odlišit\n◦ k uvolnění dat dojde po odstranění posledního hard linku\n◦ nelze vytvářet mezi různými FS a na adresářích\n• Symbolický link = speciální soubor obsahující cestu k jinému souboru či adresáři\n◦ V datové části uvedeno nové jméno\n◦ Při přístupu k odkazu provede systém textovou záměnu jmen (jméno symLinku\nnahradí nové jméno)\n◦ pokud cílový soubor není, odkaz zůstane zlomený (dangling)"
      },
      "correct": "a",
      "correct_answer": "• FS umožňuje uživatelům a procesům přístup k datům uložených v souborech\n• Soubory jsou univerzální forma dlouhodobého uložení dat v sekundární paměti\n• Jsou organizovány pomocí adresářů uspořádaných do stromu s jedním kořenem\n• Cesta vyjadřuje logické umístění souboru v adresové struktuře\n◦ rozlišujeme absolutní (od kořenového adresáře) a relativní (od aktuálního adresáře) cesty",
      "explanation": "Správná možnost odpovídá původní kartičce: • FS umožňuje uživatelům a procesům přístup k datům uložených v souborech • Soubory jsou univerzální forma dlouhodobého uložení dat v sekundární paměti • Jsou organizovány pomocí adresářů uspořádaných do stromu s jedním kořenem • Cesta vyjadřuje logické umístění souboru v adresové struktuře ◦ rozlišujeme absolutní (od kořenového adresáře) a relativní (od… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-28-01",
        "b": "bosys-28-02",
        "c": "bosys-28-04",
        "d": "bosys-28-05"
      },
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-28-02",
      "source_card_id": "bosys-28-02",
      "stable_id": "9ad1ec82",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Metadata souborů vyjma oprávnění (alespoň šest).",
      "options": {
        "a": "• Čtení (r)\n• Zápis (w)\n• Vykonání (x) pro uživatele, skupinu, ostatní\n• Přidání\n• Odebrání\n• Vytvoření\n• Změna práv",
        "b": "• UID vlastníka\n• GID skupiny\n• Název\n• Velikost souboru (v bajtech)\n• Časové údaje= vytvoření, poslední úpravy, poslední přístup\n• Počet odkazů (link count)\n• Typ souboru (regulární, adresář...)",
        "c": "• Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata\n◦ jedná se spíše o vlastnost souborového systému\n◦ nové a původní jméno souboru nelze odlišit\n◦ k uvolnění dat dojde po odstranění posledního hard linku\n◦ nelze vytvářet mezi různými FS a na adresářích\n• Symbolický link = speciální soubor obsahující cestu k jinému souboru či adresáři\n◦ V datové části uvedeno nové jméno\n◦ Při přístupu k odkazu provede systém textovou záměnu jmen (jméno symLinku\nnahradí nové jméno)\n◦ pokud cílový soubor není, odkaz zůstane zlomený (dangling)",
        "d": "• FS umožňuje uživatelům a procesům přístup k datům uložených v souborech\n• Soubory jsou univerzální forma dlouhodobého uložení dat v sekundární paměti\n• Jsou organizovány pomocí adresářů uspořádaných do stromu s jedním kořenem\n• Cesta vyjadřuje logické umístění souboru v adresové struktuře\n◦ rozlišujeme absolutní (od kořenového adresáře) a relativní (od aktuálního adresáře) cesty"
      },
      "correct": "b",
      "correct_answer": "• UID vlastníka\n• GID skupiny\n• Název\n• Velikost souboru (v bajtech)\n• Časové údaje= vytvoření, poslední úpravy, poslední přístup\n• Počet odkazů (link count)\n• Typ souboru (regulární, adresář...)",
      "explanation": "Správná možnost odpovídá původní kartičce: • UID vlastníka • GID skupiny • Název • Velikost souboru (v bajtech) • Časové údaje= vytvoření, poslední úpravy, poslední přístup • Počet odkazů (link count) • Typ souboru (regulární, adresář...) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-28-03",
        "b": "bosys-28-02",
        "c": "bosys-28-05",
        "d": "bosys-28-01"
      },
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-28-03",
      "source_card_id": "bosys-28-03",
      "stable_id": "5fb9a5a1",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Možná oprávnění na soubor (alespoň šest).",
      "options": {
        "a": "• FS umožňuje uživatelům a procesům přístup k datům uložených v souborech\n• Soubory jsou univerzální forma dlouhodobého uložení dat v sekundární paměti\n• Jsou organizovány pomocí adresářů uspořádaných do stromu s jedním kořenem\n• Cesta vyjadřuje logické umístění souboru v adresové struktuře\n◦ rozlišujeme absolutní (od kořenového adresáře) a relativní (od aktuálního adresáře) cesty",
        "b": "• Čtení (r)\n• Zápis (w)\n• Vykonání (x) pro uživatele, skupinu, ostatní\n• Přidání\n• Odebrání\n• Vytvoření\n• Změna práv",
        "c": "• Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata\n◦ jedná se spíše o vlastnost souborového systému\n◦ nové a původní jméno souboru nelze odlišit\n◦ k uvolnění dat dojde po odstranění posledního hard linku\n◦ nelze vytvářet mezi různými FS a na adresářích\n• Symbolický link = speciální soubor obsahující cestu k jinému souboru či adresáři\n◦ V datové části uvedeno nové jméno\n◦ Při přístupu k odkazu provede systém textovou záměnu jmen (jméno symLinku\nnahradí nové jméno)\n◦ pokud cílový soubor není, odkaz zůstane zlomený (dangling)",
        "d": "• UID vlastníka\n• GID skupiny\n• Název\n• Velikost souboru (v bajtech)\n• Časové údaje= vytvoření, poslední úpravy, poslední přístup\n• Počet odkazů (link count)\n• Typ souboru (regulární, adresář...)"
      },
      "correct": "b",
      "correct_answer": "• Čtení (r)\n• Zápis (w)\n• Vykonání (x) pro uživatele, skupinu, ostatní\n• Přidání\n• Odebrání\n• Vytvoření\n• Změna práv",
      "explanation": "Správná možnost odpovídá původní kartičce: • Čtení (r) • Zápis (w) • Vykonání (x) pro uživatele, skupinu, ostatní • Přidání • Odebrání • Vytvoření • Změna práv Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-28-01",
        "b": "bosys-28-03",
        "c": "bosys-28-05",
        "d": "bosys-28-02"
      },
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-28-04",
      "source_card_id": "bosys-28-04",
      "stable_id": "89f7af1a",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Popis zvláštních typů souborů (alespoň čtyř).",
      "options": {
        "a": "→ Neobsahují reálná data, pouze na ně odkazují, nebo reprezentují jinou entitu\n• Hard link = nové jméno pro existující soubor, včetně jeho metadat\n• Symbolic link = soubor, v jehož datové části je uvedeno nové jméno\n• Named pipe = jednosměrný komunikační nástroj v podobě souboru\n◦ má 2 nezávislé ukazatele (pro čtení a pro zápis)\n• Bloková zařízení = náhodný přístup po blokích (disky)\n• Znaková zařízení = proudový přístup po bajtech (terminály, tiskárny, skenery)",
        "b": "• FS umožňuje uživatelům a procesům přístup k datům uložených v souborech\n• Soubory jsou univerzální forma dlouhodobého uložení dat v sekundární paměti\n• Jsou organizovány pomocí adresářů uspořádaných do stromu s jedním kořenem\n• Cesta vyjadřuje logické umístění souboru v adresové struktuře\n◦ rozlišujeme absolutní (od kořenového adresáře) a relativní (od aktuálního adresáře) cesty",
        "c": "• UID vlastníka\n• GID skupiny\n• Název\n• Velikost souboru (v bajtech)\n• Časové údaje= vytvoření, poslední úpravy, poslední přístup\n• Počet odkazů (link count)\n• Typ souboru (regulární, adresář...)",
        "d": "• Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata\n◦ jedná se spíše o vlastnost souborového systému\n◦ nové a původní jméno souboru nelze odlišit\n◦ k uvolnění dat dojde po odstranění posledního hard linku\n◦ nelze vytvářet mezi různými FS a na adresářích\n• Symbolický link = speciální soubor obsahující cestu k jinému souboru či adresáři\n◦ V datové části uvedeno nové jméno\n◦ Při přístupu k odkazu provede systém textovou záměnu jmen (jméno symLinku\nnahradí nové jméno)\n◦ pokud cílový soubor není, odkaz zůstane zlomený (dangling)"
      },
      "correct": "a",
      "correct_answer": "→ Neobsahují reálná data, pouze na ně odkazují, nebo reprezentují jinou entitu\n• Hard link = nové jméno pro existující soubor, včetně jeho metadat\n• Symbolic link = soubor, v jehož datové části je uvedeno nové jméno\n• Named pipe = jednosměrný komunikační nástroj v podobě souboru\n◦ má 2 nezávislé ukazatele (pro čtení a pro zápis)\n• Bloková zařízení = náhodný přístup po blokích (disky)\n• Znaková zařízení = proudový přístup po bajtech (terminály, tiskárny, skenery)",
      "explanation": "Správná možnost odpovídá původní kartičce: → Neobsahují reálná data, pouze na ně odkazují, nebo reprezentují jinou entitu • Hard link = nové jméno pro existující soubor, včetně jeho metadat • Symbolic link = soubor, v jehož datové části je uvedeno nové jméno • Named pipe = jednosměrný komunikační nástroj v podobě souboru ◦ má 2 nezávislé ukazatele (pro čtení a pro zápis) • Bloková zařízení = náhodný… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-28-04",
        "b": "bosys-28-01",
        "c": "bosys-28-02",
        "d": "bosys-28-05"
      },
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-28-05",
      "source_card_id": "bosys-28-05",
      "stable_id": "e603db72",
      "section_index": 28,
      "section": "Souborový systém, metadata, speciální soubory.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Charakteristika typů odkazů a jejich reprezentace na souborovém systému.",
      "options": {
        "a": "• Čtení (r)\n• Zápis (w)\n• Vykonání (x) pro uživatele, skupinu, ostatní\n• Přidání\n• Odebrání\n• Vytvoření\n• Změna práv",
        "b": "• Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata\n◦ jedná se spíše o vlastnost souborového systému\n◦ nové a původní jméno souboru nelze odlišit\n◦ k uvolnění dat dojde po odstranění posledního hard linku\n◦ nelze vytvářet mezi různými FS a na adresářích\n• Symbolický link = speciální soubor obsahující cestu k jinému souboru či adresáři\n◦ V datové části uvedeno nové jméno\n◦ Při přístupu k odkazu provede systém textovou záměnu jmen (jméno symLinku\nnahradí nové jméno)\n◦ pokud cílový soubor není, odkaz zůstane zlomený (dangling)",
        "c": "→ Neobsahují reálná data, pouze na ně odkazují, nebo reprezentují jinou entitu\n• Hard link = nové jméno pro existující soubor, včetně jeho metadat\n• Symbolic link = soubor, v jehož datové části je uvedeno nové jméno\n• Named pipe = jednosměrný komunikační nástroj v podobě souboru\n◦ má 2 nezávislé ukazatele (pro čtení a pro zápis)\n• Bloková zařízení = náhodný přístup po blokích (disky)\n• Znaková zařízení = proudový přístup po bajtech (terminály, tiskárny, skenery)",
        "d": "• UID vlastníka\n• GID skupiny\n• Název\n• Velikost souboru (v bajtech)\n• Časové údaje= vytvoření, poslední úpravy, poslední přístup\n• Počet odkazů (link count)\n• Typ souboru (regulární, adresář...)"
      },
      "correct": "b",
      "correct_answer": "• Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata\n◦ jedná se spíše o vlastnost souborového systému\n◦ nové a původní jméno souboru nelze odlišit\n◦ k uvolnění dat dojde po odstranění posledního hard linku\n◦ nelze vytvářet mezi různými FS a na adresářích\n• Symbolický link = speciální soubor obsahující cestu k jinému souboru či adresáři\n◦ V datové části uvedeno nové jméno\n◦ Při přístupu k odkazu provede systém textovou záměnu jmen (jméno symLinku\nnahradí nové jméno)\n◦ pokud cílový soubor není, odkaz zůstane zlomený (dangling)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Hard link = alias pro existující soubor, sdílí se souborem stejná data i metadata ◦ jedná se spíše o vlastnost souborového systému ◦ nové a původní jméno souboru nelze odlišit ◦ k uvolnění dat dojde po odstranění posledního hard linku ◦ nelze vytvářet mezi různými FS a na adresářích • Symbolický link = speciální soubor obsahující cestu k jinému souboru či… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-28-03",
        "b": "bosys-28-05",
        "c": "bosys-28-04",
        "d": "bosys-28-02"
      },
      "tags": [
        "BOSYS",
        "sekce-28",
        "souborovy-system-metadata-specialni-soubory",
        "abcd-test"
      ],
      "points_hint": "2 + 2"
    },
    {
      "id": "bosys-abcd-29-01",
      "source_card_id": "bosys-29-01",
      "stable_id": "c065fdbe",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis příčiny vzniku nekonzistence metadat souborového systému.",
      "options": {
        "a": "• Journaling (metadata-only) = ext3, NTFS\n• Journaling (metadata + data) = ext4, ReiserFS\n• Copy-on-write = Btrfs(Linux), ZFS(Solaris)",
        "b": "• Nikdy nemodifikuje bloky na místě\n• Odkládá kopírování dat až do chvíle, kdy je skutečně potřeba změna\n• Při potřebě přepsat nějaký blok se modifikuje kopie původního bloku a ta se zapíše do nově alokovaného prostoru, starý blok může být smazán\n• Souborový systém je tedy vždy konzistentní\n• Nevýhody = vyšší využití místa, složitější implementace",
        "c": "• Kruhový buffer, do kterého se zapisují prováděné změny metadat či dat\n• Před změnou metadat se do “žurnálu” napíše krátký log o změně\n• Po pádu se přečtou nedokončené záznamy z žurnálu a provede se dokončení či navrácení\n• Nevýhody = menší výkon, protože se zapisuje na 2 místa (žurnál a místo změny)",
        "d": "• Fáze zápisu do souboru:\n◦ alokace nových bloků ve FS\n◦ fyzický zápis dat\n◦ aktualizace metadat souboru\n• Při pádu systému či ztrátě napájení mezi těmito kroky zůstávají některé bloky označeny\njako volné i přesto, že obsahují data, nebo naopak -> NEKONZISTENCE"
      },
      "correct": "d",
      "correct_answer": "• Fáze zápisu do souboru:\n◦ alokace nových bloků ve FS\n◦ fyzický zápis dat\n◦ aktualizace metadat souboru\n• Při pádu systému či ztrátě napájení mezi těmito kroky zůstávají některé bloky označeny\njako volné i přesto, že obsahují data, nebo naopak -> NEKONZISTENCE",
      "explanation": "Správná možnost odpovídá původní kartičce: • Fáze zápisu do souboru: ◦ alokace nových bloků ve FS ◦ fyzický zápis dat ◦ aktualizace metadat souboru • Při pádu systému či ztrátě napájení mezi těmito kroky zůstávají některé bloky označeny jako volné i přesto, že obsahují data, nebo naopak -> NEKONZISTENCE Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-29-04",
        "b": "bosys-29-03",
        "c": "bosys-29-02",
        "d": "bosys-29-01"
      },
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-29-02",
      "source_card_id": "bosys-29-02",
      "stable_id": "362b4980",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Popis principu žurnálování (včetně nevýhod) a činnost obnovy konzistence po pádu.",
      "options": {
        "a": "• Journaling (metadata-only) = ext3, NTFS\n• Journaling (metadata + data) = ext4, ReiserFS\n• Copy-on-write = Btrfs(Linux), ZFS(Solaris)",
        "b": "• Nikdy nemodifikuje bloky na místě\n• Odkládá kopírování dat až do chvíle, kdy je skutečně potřeba změna\n• Při potřebě přepsat nějaký blok se modifikuje kopie původního bloku a ta se zapíše do nově alokovaného prostoru, starý blok může být smazán\n• Souborový systém je tedy vždy konzistentní\n• Nevýhody = vyšší využití místa, složitější implementace",
        "c": "• Fáze zápisu do souboru:\n◦ alokace nových bloků ve FS\n◦ fyzický zápis dat\n◦ aktualizace metadat souboru\n• Při pádu systému či ztrátě napájení mezi těmito kroky zůstávají některé bloky označeny\njako volné i přesto, že obsahují data, nebo naopak -> NEKONZISTENCE",
        "d": "• Kruhový buffer, do kterého se zapisují prováděné změny metadat či dat\n• Před změnou metadat se do “žurnálu” napíše krátký log o změně\n• Po pádu se přečtou nedokončené záznamy z žurnálu a provede se dokončení či navrácení\n• Nevýhody = menší výkon, protože se zapisuje na 2 místa (žurnál a místo změny)"
      },
      "correct": "d",
      "correct_answer": "• Kruhový buffer, do kterého se zapisují prováděné změny metadat či dat\n• Před změnou metadat se do “žurnálu” napíše krátký log o změně\n• Po pádu se přečtou nedokončené záznamy z žurnálu a provede se dokončení či navrácení\n• Nevýhody = menší výkon, protože se zapisuje na 2 místa (žurnál a místo změny)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Kruhový buffer, do kterého se zapisují prováděné změny metadat či dat • Před změnou metadat se do “žurnálu” napíše krátký log o změně • Po pádu se přečtou nedokončené záznamy z žurnálu a provede se dokončení či navrácení • Nevýhody = menší výkon, protože se zapisuje na 2 místa (žurnál a místo změny) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-29-04",
        "b": "bosys-29-03",
        "c": "bosys-29-01",
        "d": "bosys-29-02"
      },
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody",
        "abcd-test"
      ],
      "points_hint": "5"
    },
    {
      "id": "bosys-abcd-29-03",
      "source_card_id": "bosys-29-03",
      "stable_id": "0243c4b0",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis principu metody copy‑on‑write (včetně nevýhod) a činnost obnovy konzistence po pádu.",
      "options": {
        "a": "• Nikdy nemodifikuje bloky na místě\n• Odkládá kopírování dat až do chvíle, kdy je skutečně potřeba změna\n• Při potřebě přepsat nějaký blok se modifikuje kopie původního bloku a ta se zapíše do nově alokovaného prostoru, starý blok může být smazán\n• Souborový systém je tedy vždy konzistentní\n• Nevýhody = vyšší využití místa, složitější implementace",
        "b": "• Kruhový buffer, do kterého se zapisují prováděné změny metadat či dat\n• Před změnou metadat se do “žurnálu” napíše krátký log o změně\n• Po pádu se přečtou nedokončené záznamy z žurnálu a provede se dokončení či navrácení\n• Nevýhody = menší výkon, protože se zapisuje na 2 místa (žurnál a místo změny)",
        "c": "• Fáze zápisu do souboru:\n◦ alokace nových bloků ve FS\n◦ fyzický zápis dat\n◦ aktualizace metadat souboru\n• Při pádu systému či ztrátě napájení mezi těmito kroky zůstávají některé bloky označeny\njako volné i přesto, že obsahují data, nebo naopak -> NEKONZISTENCE",
        "d": "• Journaling (metadata-only) = ext3, NTFS\n• Journaling (metadata + data) = ext4, ReiserFS\n• Copy-on-write = Btrfs(Linux), ZFS(Solaris)"
      },
      "correct": "a",
      "correct_answer": "• Nikdy nemodifikuje bloky na místě\n• Odkládá kopírování dat až do chvíle, kdy je skutečně potřeba změna\n• Při potřebě přepsat nějaký blok se modifikuje kopie původního bloku a ta se zapíše do nově alokovaného prostoru, starý blok může být smazán\n• Souborový systém je tedy vždy konzistentní\n• Nevýhody = vyšší využití místa, složitější implementace",
      "explanation": "Správná možnost odpovídá původní kartičce: • Nikdy nemodifikuje bloky na místě • Odkládá kopírování dat až do chvíle, kdy je skutečně potřeba změna • Při potřebě přepsat nějaký blok se modifikuje kopie původního bloku a ta se zapíše do nově alokovaného prostoru, starý blok může být smazán • Souborový systém je tedy vždy konzistentní • Nevýhody = vyšší využití místa, složitější implementace Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-29-03",
        "b": "bosys-29-02",
        "c": "bosys-29-01",
        "d": "bosys-29-04"
      },
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody",
        "abcd-test"
      ],
      "points_hint": "4"
    },
    {
      "id": "bosys-abcd-29-04",
      "source_card_id": "bosys-29-04",
      "stable_id": "2ed5cf60",
      "section_index": 29,
      "section": "Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Příklady souborových systémů ve vztahu k metodě zachování konzistence, alespoň dva různé pro každou metodu (nikoliv různé verze téhož), pro žurnálování zvlášť po dvou příkladech pro dvojí způsob.",
      "options": {
        "a": "• Journaling (metadata-only) = ext3, NTFS\n• Journaling (metadata + data) = ext4, ReiserFS\n• Copy-on-write = Btrfs(Linux), ZFS(Solaris)",
        "b": "• Fáze zápisu do souboru:\n◦ alokace nových bloků ve FS\n◦ fyzický zápis dat\n◦ aktualizace metadat souboru\n• Při pádu systému či ztrátě napájení mezi těmito kroky zůstávají některé bloky označeny\njako volné i přesto, že obsahují data, nebo naopak -> NEKONZISTENCE",
        "c": "• Kruhový buffer, do kterého se zapisují prováděné změny metadat či dat\n• Před změnou metadat se do “žurnálu” napíše krátký log o změně\n• Po pádu se přečtou nedokončené záznamy z žurnálu a provede se dokončení či navrácení\n• Nevýhody = menší výkon, protože se zapisuje na 2 místa (žurnál a místo změny)",
        "d": "• Nikdy nemodifikuje bloky na místě\n• Odkládá kopírování dat až do chvíle, kdy je skutečně potřeba změna\n• Při potřebě přepsat nějaký blok se modifikuje kopie původního bloku a ta se zapíše do nově alokovaného prostoru, starý blok může být smazán\n• Souborový systém je tedy vždy konzistentní\n• Nevýhody = vyšší využití místa, složitější implementace"
      },
      "correct": "a",
      "correct_answer": "• Journaling (metadata-only) = ext3, NTFS\n• Journaling (metadata + data) = ext4, ReiserFS\n• Copy-on-write = Btrfs(Linux), ZFS(Solaris)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Journaling (metadata-only) = ext3, NTFS • Journaling (metadata + data) = ext4, ReiserFS • Copy-on-write = Btrfs(Linux), ZFS(Solaris) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-29-04",
        "b": "bosys-29-01",
        "c": "bosys-29-02",
        "d": "bosys-29-03"
      },
      "tags": [
        "BOSYS",
        "sekce-29",
        "konzistence-metadat-souborovych-systemu-priciny-vzniku-nekonzistenci-metody",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-30-01",
      "source_card_id": "bosys-30-01",
      "stable_id": "c48505b6",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Popis typů úložišť (DAS, NAS, SAN) s příklady.",
      "options": {
        "a": "• Kontinuální\n◦ každému souboru je vyhrazena jedna souvislá oblast bloků\n◦ +rychlé čtení, -vnější fragmentace\n• Propojené (linked)\n◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku\n◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení\n• Indexované\n◦ pro každý soubor existuje indexový blok, který obsahuje seznam všech adres bloků\n◦ +žádná vnější fragmentace, rychlý přímý přístup, -bloky zabírají více paměti",
        "b": "• Striping s distribuovanou paritou (informace pro obnovu dat)\n• min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity",
        "c": "• DAS (Direct-Attached Storage)\n◦ interní/externí disk připojený přímo k serveru nebo PC\n◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní\n◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery\n◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID)\n• NAS (Network-Attached Storage)\n◦ zařízení připojené do Ethernetové síťe, poskytuje souborové služby přes síť\n◦ +Snadné sdílení mezi více uživateli, -Závislé na LAN\n◦ Příklad: Synology DiskStation, QNAP TS-series, Cloud server\n• SAN (Storage Area Network)\n◦ Vyhrazená vysokorychlostní síť\n◦ poskytuje blokové úložiště vzdáleně\n◦ +Vysoká propustnost a nízká latence, -Vyšší cena a složítá správa\n◦ Příklad: Fibre Channel",
        "d": "RAID je zapojení více disků do pole kvůli rychlosti, kapacitě nebo odolnosti.\n• RAID 0: striping, min. 2 disky, rychlý, bez redundance.\n• RAID 1: mirroring, min. 2 disky, data jsou zrcadlena, lepší čtení a odolnost proti výpadku jednoho disku.\n• RAID 5: striping s distribuovanou paritou, min. 3 disky, odolá výpadku jednoho disku, zápis je pomalejší kvůli paritě."
      },
      "correct": "c",
      "correct_answer": "• DAS (Direct-Attached Storage)\n◦ interní/externí disk připojený přímo k serveru nebo PC\n◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní\n◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery\n◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID)\n• NAS (Network-Attached Storage)\n◦ zařízení připojené do Ethernetové síťe, poskytuje souborové služby přes síť\n◦ +Snadné sdílení mezi více uživateli, -Závislé na LAN\n◦ Příklad: Synology DiskStation, QNAP TS-series, Cloud server\n• SAN (Storage Area Network)\n◦ Vyhrazená vysokorychlostní síť\n◦ poskytuje blokové úložiště vzdáleně\n◦ +Vysoká propustnost a nízká latence, -Vyšší cena a složítá správa\n◦ Příklad: Fibre Channel",
      "explanation": "Správná možnost odpovídá původní kartičce: • DAS (Direct-Attached Storage) ◦ interní/externí disk připojený přímo k serveru nebo PC ◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní ◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery ◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID) • NAS (Network-Attached Storage) ◦ zařízení připojené… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-30-06",
        "b": "bosys-30-05",
        "c": "bosys-30-01",
        "d": "bosys-30-02"
      },
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-30-02",
      "source_card_id": "bosys-30-02",
      "stable_id": "8fb70a28",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Charakteristika RAID (způsob zapojení včetně minimálního počtu disků a principu ukládání dat, odolnost, rychlost R/W).",
      "options": {
        "a": "• Striping s distribuovanou paritou (informace pro obnovu dat)\n• min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity",
        "b": "RAID je zapojení více disků do pole kvůli rychlosti, kapacitě nebo odolnosti.\n• RAID 0: striping, min. 2 disky, rychlý, bez redundance.\n• RAID 1: mirroring, min. 2 disky, data jsou zrcadlena, lepší čtení a odolnost proti výpadku jednoho disku.\n• RAID 5: striping s distribuovanou paritou, min. 3 disky, odolá výpadku jednoho disku, zápis je pomalejší kvůli paritě.",
        "c": "• Striping\n◦ data jsou rozdělena na bloky a ukládají se střídavě na více disků v poli\n• min. 2 disky, vysoká rychlost, žádná odolnost (selže-li jeden disk, přijdeme o všechna data)",
        "d": "• Kontinuální\n◦ každému souboru je vyhrazena jedna souvislá oblast bloků\n◦ +rychlé čtení, -vnější fragmentace\n• Propojené (linked)\n◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku\n◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení\n• Indexované\n◦ pro každý soubor existuje indexový blok, který obsahuje seznam všech adres bloků\n◦ +žádná vnější fragmentace, rychlý přímý přístup, -bloky zabírají více paměti"
      },
      "correct": "b",
      "correct_answer": "RAID je zapojení více disků do pole kvůli rychlosti, kapacitě nebo odolnosti.\n• RAID 0: striping, min. 2 disky, rychlý, bez redundance.\n• RAID 1: mirroring, min. 2 disky, data jsou zrcadlena, lepší čtení a odolnost proti výpadku jednoho disku.\n• RAID 5: striping s distribuovanou paritou, min. 3 disky, odolá výpadku jednoho disku, zápis je pomalejší kvůli paritě.",
      "explanation": "Správná možnost odpovídá původní kartičce: RAID je zapojení více disků do pole kvůli rychlosti, kapacitě nebo odolnosti. • RAID 0: striping, min. 2 disky, rychlý, bez redundance. • RAID 1: mirroring, min. 2 disky, data jsou zrcadlena, lepší čtení a odolnost proti výpadku jednoho disku. • RAID 5: striping s distribuovanou paritou, min. 3 disky, odolá výpadku jednoho disku, zápis je pomalejší kvůli… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-30-05",
        "b": "bosys-30-02",
        "c": "bosys-30-03",
        "d": "bosys-30-06"
      },
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru",
        "abcd-test"
      ],
      "points_hint": null
    },
    {
      "id": "bosys-abcd-30-03",
      "source_card_id": "bosys-30-03",
      "stable_id": "73aafe16",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "RAID 0.",
      "options": {
        "a": "• Mirroring\n◦ data jsou zapisována identicky na 2 nebo více disků\n• min. 2 disky, plná redundance, čtení rychle, odolný vůči pádu jednoho disku\n• poloviční využití kapacity (2x disky, 1x data)",
        "b": "• Striping\n◦ data jsou rozdělena na bloky a ukládají se střídavě na více disků v poli\n• min. 2 disky, vysoká rychlost, žádná odolnost (selže-li jeden disk, přijdeme o všechna data)",
        "c": "• DAS (Direct-Attached Storage)\n◦ interní/externí disk připojený přímo k serveru nebo PC\n◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní\n◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery\n◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID)\n• NAS (Network-Attached Storage)\n◦ zařízení připojené do Ethernetové síťe, poskytuje souborové služby přes síť\n◦ +Snadné sdílení mezi více uživateli, -Závislé na LAN\n◦ Příklad: Synology DiskStation, QNAP TS-series, Cloud server\n• SAN (Storage Area Network)\n◦ Vyhrazená vysokorychlostní síť\n◦ poskytuje blokové úložiště vzdáleně\n◦ +Vysoká propustnost a nízká latence, -Vyšší cena a složítá správa\n◦ Příklad: Fibre Channel",
        "d": "RAID je zapojení více disků do pole kvůli rychlosti, kapacitě nebo odolnosti.\n• RAID 0: striping, min. 2 disky, rychlý, bez redundance.\n• RAID 1: mirroring, min. 2 disky, data jsou zrcadlena, lepší čtení a odolnost proti výpadku jednoho disku.\n• RAID 5: striping s distribuovanou paritou, min. 3 disky, odolá výpadku jednoho disku, zápis je pomalejší kvůli paritě."
      },
      "correct": "b",
      "correct_answer": "• Striping\n◦ data jsou rozdělena na bloky a ukládají se střídavě na více disků v poli\n• min. 2 disky, vysoká rychlost, žádná odolnost (selže-li jeden disk, přijdeme o všechna data)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Striping ◦ data jsou rozdělena na bloky a ukládají se střídavě na více disků v poli • min. 2 disky, vysoká rychlost, žádná odolnost (selže-li jeden disk, přijdeme o všechna data) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-30-04",
        "b": "bosys-30-03",
        "c": "bosys-30-01",
        "d": "bosys-30-02"
      },
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-30-04",
      "source_card_id": "bosys-30-04",
      "stable_id": "8e77edf4",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "RAID 1.",
      "options": {
        "a": "• Kontinuální\n◦ každému souboru je vyhrazena jedna souvislá oblast bloků\n◦ +rychlé čtení, -vnější fragmentace\n• Propojené (linked)\n◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku\n◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení\n• Indexované\n◦ pro každý soubor existuje indexový blok, který obsahuje seznam všech adres bloků\n◦ +žádná vnější fragmentace, rychlý přímý přístup, -bloky zabírají více paměti",
        "b": "• DAS (Direct-Attached Storage)\n◦ interní/externí disk připojený přímo k serveru nebo PC\n◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní\n◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery\n◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID)\n• NAS (Network-Attached Storage)\n◦ zařízení připojené do Ethernetové síťe, poskytuje souborové služby přes síť\n◦ +Snadné sdílení mezi více uživateli, -Závislé na LAN\n◦ Příklad: Synology DiskStation, QNAP TS-series, Cloud server\n• SAN (Storage Area Network)\n◦ Vyhrazená vysokorychlostní síť\n◦ poskytuje blokové úložiště vzdáleně\n◦ +Vysoká propustnost a nízká latence, -Vyšší cena a složítá správa\n◦ Příklad: Fibre Channel",
        "c": "• Striping s distribuovanou paritou (informace pro obnovu dat)\n• min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity",
        "d": "• Mirroring\n◦ data jsou zapisována identicky na 2 nebo více disků\n• min. 2 disky, plná redundance, čtení rychle, odolný vůči pádu jednoho disku\n• poloviční využití kapacity (2x disky, 1x data)"
      },
      "correct": "d",
      "correct_answer": "• Mirroring\n◦ data jsou zapisována identicky na 2 nebo více disků\n• min. 2 disky, plná redundance, čtení rychle, odolný vůči pádu jednoho disku\n• poloviční využití kapacity (2x disky, 1x data)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Mirroring ◦ data jsou zapisována identicky na 2 nebo více disků • min. 2 disky, plná redundance, čtení rychle, odolný vůči pádu jednoho disku • poloviční využití kapacity (2x disky, 1x data) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-30-06",
        "b": "bosys-30-01",
        "c": "bosys-30-05",
        "d": "bosys-30-04"
      },
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-30-05",
      "source_card_id": "bosys-30-05",
      "stable_id": "df3e0c49",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "RAID 5.",
      "options": {
        "a": "• Striping\n◦ data jsou rozdělena na bloky a ukládají se střídavě na více disků v poli\n• min. 2 disky, vysoká rychlost, žádná odolnost (selže-li jeden disk, přijdeme o všechna data)",
        "b": "• Striping s distribuovanou paritou (informace pro obnovu dat)\n• min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity",
        "c": "• DAS (Direct-Attached Storage)\n◦ interní/externí disk připojený přímo k serveru nebo PC\n◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní\n◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery\n◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID)\n• NAS (Network-Attached Storage)\n◦ zařízení připojené do Ethernetové síťe, poskytuje souborové služby přes síť\n◦ +Snadné sdílení mezi více uživateli, -Závislé na LAN\n◦ Příklad: Synology DiskStation, QNAP TS-series, Cloud server\n• SAN (Storage Area Network)\n◦ Vyhrazená vysokorychlostní síť\n◦ poskytuje blokové úložiště vzdáleně\n◦ +Vysoká propustnost a nízká latence, -Vyšší cena a složítá správa\n◦ Příklad: Fibre Channel",
        "d": "• Kontinuální\n◦ každému souboru je vyhrazena jedna souvislá oblast bloků\n◦ +rychlé čtení, -vnější fragmentace\n• Propojené (linked)\n◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku\n◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení\n• Indexované\n◦ pro každý soubor existuje indexový blok, který obsahuje seznam všech adres bloků\n◦ +žádná vnější fragmentace, rychlý přímý přístup, -bloky zabírají více paměti"
      },
      "correct": "b",
      "correct_answer": "• Striping s distribuovanou paritou (informace pro obnovu dat)\n• min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity",
      "explanation": "Správná možnost odpovídá původní kartičce: • Striping s distribuovanou paritou (informace pro obnovu dat) • min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-30-03",
        "b": "bosys-30-05",
        "c": "bosys-30-01",
        "d": "bosys-30-06"
      },
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-30-06",
      "source_card_id": "bosys-30-06",
      "stable_id": "fb2d6f14",
      "section_index": 30,
      "section": "Typy úložišť, RAID, způsob alokace dat souborů.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Charakteristika možných způsobů alokace dat pro soubory.",
      "options": {
        "a": "• DAS (Direct-Attached Storage)\n◦ interní/externí disk připojený přímo k serveru nebo PC\n◦ Blokový přístup, PC/server přistupuje k uložišti přes místní rozhraní\n◦ +Jednoduchá instalace a správa, -Nelze snadno sdílet mezi více PC/servery\n◦ Příklad: Interní/Externí diskové pole (HDD, SSD, Thunderbolt RAID)\n• NAS (Network-Attached Storage)\n◦ zařízení připojené do Ethernetové síťe, poskytuje souborové služby přes síť\n◦ +Snadné sdílení mezi více uživateli, -Závislé na LAN\n◦ Příklad: Synology DiskStation, QNAP TS-series, Cloud server\n• SAN (Storage Area Network)\n◦ Vyhrazená vysokorychlostní síť\n◦ poskytuje blokové úložiště vzdáleně\n◦ +Vysoká propustnost a nízká latence, -Vyšší cena a složítá správa\n◦ Příklad: Fibre Channel",
        "b": "• Kontinuální\n◦ každému souboru je vyhrazena jedna souvislá oblast bloků\n◦ +rychlé čtení, -vnější fragmentace\n• Propojené (linked)\n◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku\n◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení\n• Indexované\n◦ pro každý soubor existuje indexový blok, který obsahuje seznam všech adres bloků\n◦ +žádná vnější fragmentace, rychlý přímý přístup, -bloky zabírají více paměti",
        "c": "• Striping s distribuovanou paritou (informace pro obnovu dat)\n• min. 3 disky (jeden zabírá kód parity), odolnost pádu 1 disku, čtení dobré, zápis pomalejší kvůli výpočtu parity",
        "d": "RAID je zapojení více disků do pole kvůli rychlosti, kapacitě nebo odolnosti.\n• RAID 0: striping, min. 2 disky, rychlý, bez redundance.\n• RAID 1: mirroring, min. 2 disky, data jsou zrcadlena, lepší čtení a odolnost proti výpadku jednoho disku.\n• RAID 5: striping s distribuovanou paritou, min. 3 disky, odolá výpadku jednoho disku, zápis je pomalejší kvůli paritě."
      },
      "correct": "b",
      "correct_answer": "• Kontinuální\n◦ každému souboru je vyhrazena jedna souvislá oblast bloků\n◦ +rychlé čtení, -vnější fragmentace\n• Propojené (linked)\n◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku\n◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení\n• Indexované\n◦ pro každý soubor existuje indexový blok, který obsahuje seznam všech adres bloků\n◦ +žádná vnější fragmentace, rychlý přímý přístup, -bloky zabírají více paměti",
      "explanation": "Správná možnost odpovídá původní kartičce: • Kontinuální ◦ každému souboru je vyhrazena jedna souvislá oblast bloků ◦ +rychlé čtení, -vnější fragmentace • Propojené (linked) ◦ soubory se skládají z řetězce bloků, kde každý má ukazatel na adresu toho dalšího bloku ◦ +žádná vnější fragmentace, jednoduchá správa, -pomalé náhodné čtení • Indexované ◦ pro každý soubor existuje indexový blok, který… Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-30-01",
        "b": "bosys-30-06",
        "c": "bosys-30-05",
        "d": "bosys-30-02"
      },
      "tags": [
        "BOSYS",
        "sekce-30",
        "typy-ulozist-raid-zpusob-alokace-dat-souboru",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-31-01",
      "source_card_id": "bosys-31-01",
      "stable_id": "665bca35",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 1,
      "type": "single_choice_abcd",
      "question": "Definice pojmů autentizace a autorizace.",
      "options": {
        "a": "• Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta\n◦ klient se autorizuje dešifrací pomocí privátního klíče\n• Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče\n• Ověření hostitele (host key) = klient ukládá fingerprint serveru",
        "b": "• Krádež privátního klíče\n→ používat silnou passphrase na privátní klíč\n• Man-In-The-Middle útoky = klient může důvěřovat falešnému serveru (zachycení nového fingerprintu)\n→ validovat host key první připojení\n• Brute-force = útočník opakovaně zkouší hesla\n→ použít fail2ban, rate-limiting",
        "c": "• Autentizace = ověření identity\n• Autorizace = ověření oprávnění",
        "d": "• Heslo\n• Klíč\n• Certifikát\n• Biometrie\n• OTP/ TOTP (token nebo časový kód)"
      },
      "correct": "c",
      "correct_answer": "• Autentizace = ověření identity\n• Autorizace = ověření oprávnění",
      "explanation": "Správná možnost odpovídá původní kartičce: • Autentizace = ověření identity • Autorizace = ověření oprávnění Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-31-03",
        "b": "bosys-31-04",
        "c": "bosys-31-01",
        "d": "bosys-31-02"
      },
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-31-02",
      "source_card_id": "bosys-31-02",
      "stable_id": "7d2f425b",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 2,
      "type": "single_choice_abcd",
      "question": "Možné metody autentizace (alespoň čtyři).",
      "options": {
        "a": "• Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta\n◦ klient se autorizuje dešifrací pomocí privátního klíče\n• Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče\n• Ověření hostitele (host key) = klient ukládá fingerprint serveru",
        "b": "• Heslo\n• Klíč\n• Certifikát\n• Biometrie\n• OTP/ TOTP (token nebo časový kód)",
        "c": "• Autentizace = ověření identity\n• Autorizace = ověření oprávnění",
        "d": "• Délka min. 12 znaků\n• Kombinace velkých a malých písmen, číslic a speciálních znaků\n• Žádné slovníky ani osobní údaje\n• Používat různá hesla pro jiné účty"
      },
      "correct": "b",
      "correct_answer": "• Heslo\n• Klíč\n• Certifikát\n• Biometrie\n• OTP/ TOTP (token nebo časový kód)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Heslo • Klíč • Certifikát • Biometrie • OTP/ TOTP (token nebo časový kód) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-31-03",
        "b": "bosys-31-02",
        "c": "bosys-31-01",
        "d": "bosys-31-05"
      },
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-31-03",
      "source_card_id": "bosys-31-03",
      "stable_id": "dc0978e8",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 3,
      "type": "single_choice_abcd",
      "question": "Popis principu zabezpečení přihlašování pomocí protokolu SSH.",
      "options": {
        "a": "• Trojské koně (nevinně vypadající program se škodlivou “funkcí”)\n• Login spoofing (imitace přihlašovací obrazovky)\n• Viry, červy\n• Man In The Middle (odposlech)\n• Denial of Service (odmítnutí služby)",
        "b": "• Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta\n◦ klient se autorizuje dešifrací pomocí privátního klíče\n• Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče\n• Ověření hostitele (host key) = klient ukládá fingerprint serveru",
        "c": "• Délka min. 12 znaků\n• Kombinace velkých a malých písmen, číslic a speciálních znaků\n• Žádné slovníky ani osobní údaje\n• Používat různá hesla pro jiné účty",
        "d": "• Autentizace = ověření identity\n• Autorizace = ověření oprávnění"
      },
      "correct": "b",
      "correct_answer": "• Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta\n◦ klient se autorizuje dešifrací pomocí privátního klíče\n• Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče\n• Ověření hostitele (host key) = klient ukládá fingerprint serveru",
      "explanation": "Správná možnost odpovídá původní kartičce: • Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta ◦ klient se autorizuje dešifrací pomocí privátního klíče • Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče • Ověření hostitele (host key) = klient ukládá fingerprint serveru Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-31-06",
        "b": "bosys-31-03",
        "c": "bosys-31-05",
        "d": "bosys-31-01"
      },
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace",
        "abcd-test"
      ],
      "points_hint": "3"
    },
    {
      "id": "bosys-abcd-31-04",
      "source_card_id": "bosys-31-04",
      "stable_id": "0d5a5681",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 4,
      "type": "single_choice_abcd",
      "question": "Riziko přihlašování pomocí protokolu SSH a jak mu předcházet.",
      "options": {
        "a": "• Krádež privátního klíče\n→ používat silnou passphrase na privátní klíč\n• Man-In-The-Middle útoky = klient může důvěřovat falešnému serveru (zachycení nového fingerprintu)\n→ validovat host key první připojení\n• Brute-force = útočník opakovaně zkouší hesla\n→ použít fail2ban, rate-limiting",
        "b": "• Heslo\n• Klíč\n• Certifikát\n• Biometrie\n• OTP/ TOTP (token nebo časový kód)",
        "c": "• Trojské koně (nevinně vypadající program se škodlivou “funkcí”)\n• Login spoofing (imitace přihlašovací obrazovky)\n• Viry, červy\n• Man In The Middle (odposlech)\n• Denial of Service (odmítnutí služby)",
        "d": "• Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta\n◦ klient se autorizuje dešifrací pomocí privátního klíče\n• Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče\n• Ověření hostitele (host key) = klient ukládá fingerprint serveru"
      },
      "correct": "a",
      "correct_answer": "• Krádež privátního klíče\n→ používat silnou passphrase na privátní klíč\n• Man-In-The-Middle útoky = klient může důvěřovat falešnému serveru (zachycení nového fingerprintu)\n→ validovat host key první připojení\n• Brute-force = útočník opakovaně zkouší hesla\n→ použít fail2ban, rate-limiting",
      "explanation": "Správná možnost odpovídá původní kartičce: • Krádež privátního klíče → používat silnou passphrase na privátní klíč • Man-In-The-Middle útoky = klient může důvěřovat falešnému serveru (zachycení nového fingerprintu) → validovat host key první připojení • Brute-force = útočník opakovaně zkouší hesla → použít fail2ban, rate-limiting Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-31-04",
        "b": "bosys-31-02",
        "c": "bosys-31-06",
        "d": "bosys-31-03"
      },
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace",
        "abcd-test"
      ],
      "points_hint": "2 + 2"
    },
    {
      "id": "bosys-abcd-31-05",
      "source_card_id": "bosys-31-05",
      "stable_id": "93e9592b",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 5,
      "type": "single_choice_abcd",
      "question": "Zásady tvorby hesla (čtyři nejdůležitější).",
      "options": {
        "a": "• Trojské koně (nevinně vypadající program se škodlivou “funkcí”)\n• Login spoofing (imitace přihlašovací obrazovky)\n• Viry, červy\n• Man In The Middle (odposlech)\n• Denial of Service (odmítnutí služby)",
        "b": "• Krádež privátního klíče\n→ používat silnou passphrase na privátní klíč\n• Man-In-The-Middle útoky = klient může důvěřovat falešnému serveru (zachycení nového fingerprintu)\n→ validovat host key první připojení\n• Brute-force = útočník opakovaně zkouší hesla\n→ použít fail2ban, rate-limiting",
        "c": "• Délka min. 12 znaků\n• Kombinace velkých a malých písmen, číslic a speciálních znaků\n• Žádné slovníky ani osobní údaje\n• Používat různá hesla pro jiné účty",
        "d": "• Heslo\n• Klíč\n• Certifikát\n• Biometrie\n• OTP/ TOTP (token nebo časový kód)"
      },
      "correct": "c",
      "correct_answer": "• Délka min. 12 znaků\n• Kombinace velkých a malých písmen, číslic a speciálních znaků\n• Žádné slovníky ani osobní údaje\n• Používat různá hesla pro jiné účty",
      "explanation": "Správná možnost odpovídá původní kartičce: • Délka min. 12 znaků • Kombinace velkých a malých písmen, číslic a speciálních znaků • Žádné slovníky ani osobní údaje • Používat různá hesla pro jiné účty Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-31-06",
        "b": "bosys-31-04",
        "c": "bosys-31-05",
        "d": "bosys-31-02"
      },
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace",
        "abcd-test"
      ],
      "points_hint": "2"
    },
    {
      "id": "bosys-abcd-31-06",
      "source_card_id": "bosys-31-06",
      "stable_id": "79d5e697",
      "section_index": 31,
      "section": "Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence.",
      "question_index": 6,
      "type": "single_choice_abcd",
      "question": "Popis alespoň čtyř typů útoků na systém.",
      "options": {
        "a": "• Trojské koně (nevinně vypadající program se škodlivou “funkcí”)\n• Login spoofing (imitace přihlašovací obrazovky)\n• Viry, červy\n• Man In The Middle (odposlech)\n• Denial of Service (odmítnutí služby)",
        "b": "• Délka min. 12 znaků\n• Kombinace velkých a malých písmen, číslic a speciálních znaků\n• Žádné slovníky ani osobní údaje\n• Používat různá hesla pro jiné účty",
        "c": "• Asymetrická kryptografie = vygenerování klientského a serverového klíče pro klienta\n◦ klient se autorizuje dešifrací pomocí privátního klíče\n• Šifrování kanálu (AeS, ChaCha) = komunikace je šifrována pomocí dohodnutého symetrického klíče\n• Ověření hostitele (host key) = klient ukládá fingerprint serveru",
        "d": "• Autentizace = ověření identity\n• Autorizace = ověření oprávnění"
      },
      "correct": "a",
      "correct_answer": "• Trojské koně (nevinně vypadající program se škodlivou “funkcí”)\n• Login spoofing (imitace přihlašovací obrazovky)\n• Viry, červy\n• Man In The Middle (odposlech)\n• Denial of Service (odmítnutí služby)",
      "explanation": "Správná možnost odpovídá původní kartičce: • Trojské koně (nevinně vypadající program se škodlivou “funkcí”) • Login spoofing (imitace přihlašovací obrazovky) • Viry, červy • Man In The Middle (odposlech) • Denial of Service (odmítnutí služby) Ostatní možnosti jsou záměrně pravdivé odpovědi z jiných kartiček/okruhů, takže nejsou nesmyslné, ale neodpovídají této otázce.",
      "option_source_card_ids": {
        "a": "bosys-31-06",
        "b": "bosys-31-05",
        "c": "bosys-31-03",
        "d": "bosys-31-01"
      },
      "tags": [
        "BOSYS",
        "sekce-31",
        "vzdaleny-pristup-k-os-telnet-ssh-autentizace-autorizace",
        "abcd-test"
      ],
      "points_hint": "2"
    }
  ]
};