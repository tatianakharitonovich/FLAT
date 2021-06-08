# FLAT

https://tatianakharitonovich.github.io/FLAT/


Определена иерархия классов домашних электроприборов.
Классы отдельных приборов наследуются от класса "Device".
У каждого прибора определена мощность, а также еще два своих поля. 
Создан класс "Flat"(квартира), который содержат список добавленных электроприборов (добавление приборов производится с помощью метода add). 

В квартире имеются следующие возможности:
1) Включение прибора в сеть (метод plugIn);
2) Формирование и вывод списка всех включенных приборов на консоль (listSwitchOn); 
3) Подсчитывается общая потребляемая мощность включенных приборов и выводится на консоль (метод sumPower);
4) Проводится сортировка всех включенных приборов в квартире на основе мощности и выводится на консоль (метод sortPower);
5) Нахождение приборов в квартире, соответствующий заданному диапазону мощности и вывод на консоль (метод findPower);
6) При включении прибора в квартире происходит проверка на максимальное общее значение мощности. Если общая мощность включённых приборов превышает это значение, то все приборы выключаются.

