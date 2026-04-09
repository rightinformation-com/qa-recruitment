# Przykładowe dane

## users

| id | email | first_name | last_name | company_name | created_at |
|----|-------|------------|-----------|--------------|------------|
| 15017 | jan.kowalski@example.com | Jan | Kowalski | Kowalski Reklama Sp. z o.o. | 2026-01-10 08:00:00 |
| 15018 | anna.nowak@example.com | Anna | Nowak | Nowak Design | 2026-02-15 10:30:00 |
| 15019 | marek.wisniewski@example.com | Marek | Wiśniewski | NULL | 2026-03-01 12:00:00 |
| 15020 | katarzyna.zielinska@example.com | Katarzyna | Zielińska | EventPro Polska | 2026-03-20 09:15:00 |
| 15021 | tomasz.lewandowski@example.com | Tomasz | Lewandowski | Lewandowski Media | 2026-04-01 14:00:00 |

## orders

| id | user_id | status | total_net | total_gross | delivery_address_country_id | delivery_address_city | delivery_address_street | error_message | created_at |
|----|---------|--------|-----------|-------------|-----------------------------|-----------------------|-------------------------|---------------|------------|
| 585770 | 15018 | completed | 2350.00 | 2890.50 | 1 | Warszawa | ul. Marszałkowska 10 | NULL | 2026-04-08 06:45:00 |
| 585771 | 15019 | completed | 890.00 | 1094.70 | 1 | Kraków | ul. Floriańska 5 | NULL | 2026-04-08 06:50:00 |
| 585772 | 15017 | failed | 1175.00 | 1445.25 | NULL | Wrocław | ul. Świdnicka 22 | Delivery Address Country zawiera nieprawidłową wartość. | 2026-04-08 07:06:09 |
| 585773 | 15017 | failed | 1175.00 | 1445.25 | NULL | Wrocław | ul. Świdnicka 22 | Delivery Address Country zawiera nieprawidłową wartość. | 2026-04-08 07:06:35 |
| 585774 | 15017 | failed | 1175.00 | 1445.25 | NULL | Wrocław | ul. Świdnicka 22 | Delivery Address Country zawiera nieprawidłową wartość. | 2026-04-08 07:07:12 |
| 585775 | 15017 | failed | 1175.00 | 1445.25 | NULL | Wrocław | ul. Świdnicka 22 | Delivery Address Country zawiera nieprawidłową wartość. | 2026-04-08 07:07:20 |
| 585776 | 15020 | completed | 3200.00 | 3936.00 | 1 | Gdańsk | ul. Długa 8 | NULL | 2026-04-08 07:15:00 |
| 585777 | 15017 | completed | 1175.00 | 1445.25 | 1 | Wrocław | ul. Świdnicka 22 | NULL | 2026-04-08 07:25:00 |
| 585778 | 15021 | sync_error | 4500.00 | 5535.00 | 1 | Poznań | ul. Półwiejska 42 | Login error! | 2026-04-08 07:12:54 |
| 585779 | 15020 | completed | 1600.00 | 1968.00 | 1 | Gdańsk | ul. Długa 8 | NULL | 2026-04-08 08:30:00 |
| 585780 | 15019 | completed | 450.00 | 553.50 | 1 | Kraków | ul. Grodzka 12 | NULL | 2026-04-08 09:00:00 |

## order_items

| id | order_id | product_name | quantity | price_net |
|----|----------|--------------|----------|-----------|
| 1 | 585770 | adFrame Quick 100x200 | 2 | 1175.00 |
| 2 | 585771 | Roll-up Standard 85x200 | 1 | 890.00 |
| 3 | 585772 | adFrame Quick 85x200 | 1 | 1175.00 |
| 4 | 585773 | adFrame Quick 85x200 | 1 | 1175.00 |
| 5 | 585774 | adFrame Quick 85x200 | 1 | 1175.00 |
| 6 | 585775 | adFrame Quick 85x200 | 1 | 1175.00 |
| 7 | 585776 | Ścianka reklamowa Pop-up 3x3 | 1 | 3200.00 |
| 8 | 585777 | adFrame Quick 85x200 | 1 | 1175.00 |
| 9 | 585778 | Trybunka Promo | 3 | 1500.00 |
| 10 | 585779 | Roll-up Premium 100x200 | 1 | 1600.00 |
| 11 | 585780 | Klips Plastikowy | 10 | 45.00 |
