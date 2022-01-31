[< back](README.md)

# Exercises 11

KR3, pages 314-329

Save 15 minutes for the practice part.

Review:  R3, R7,  R12, R13

    - Simulator for GBN: https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/go-back-n-protocol/index.html
    - Simulator for SR: https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/selective-repeat-protocol/index.html


Problems

- P9
- p19
- Repeat p19 using selective repeat (For these two exercises I encourage to tryout the interactive simulator located at

    - Simulator for GBN: [https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/go-back-n-protocol/index.html](https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/go-back-n-protocol/index.html)
    - Simulator for SR: [https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/selective-repeat-protocol/index.html](https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/selective-repeat-protocol/index.html)

Practice: port scanning  

Install the nmap tool (if it is not already on you system) [https://nmap.org/download.html](https://nmap.org/download.html) 

1. Run `nmap -v www.cs.aau.dk` to discover what ports are open at [www.cs.aau.dk](http://www.cs.aau.dk/):
2. What application/services are attached to those ports? Some may be well-known, some may require the assistance from your favorite search engine. Optionally get more specific information: 
    - *`nmap -sC -sV -p` (ports gotten in previous scan) (ip gotten in previous scan)*
3. Connect to the cs-department using [VPN](https://www.en.its.aau.dk/instructions/VPN/) (to get inside the AAU's network). Repeat the above steps for host that serves your student file share; If you haven't set up VPN you can alternatively try to scan the host [http://scanme.nmap.org/](http://scanme.nmap.org/)