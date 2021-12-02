# school
Репа для сайта школы

### Файл Requirements

На данный момент установлено достаточное количество пакетов в виртуальной среде Python.
Если нужно повторно создать среду на другом компьютере, у вас будут проблемы с запоминанием пакетов,
которые вы должны были установить, поэтому общепринятой практикой является создание файла requirements.txt
в корневой папке проекта с перечислением всех зависимостей и их версий.

Создать этот список на самом деле легко:
```console
(venv) $ pip freeze > requirements.txt
```
Команда pip freeze создаст дамп всех пакетов, установленных в виртуальной среде, в формате, соответствующем файлу
requirements.txt.

Теперь, если вам нужно создать ту же виртуальную среду на другой машине, вместо установки пакетов по одному,
вы можете запустить:
```console
(venv) $ pip install -r requirements.txt
```