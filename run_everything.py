import subprocess

commands = [
    "cd fiber_reg_core && mvn clean package && mvn spring-boot:run",
    "cd fiber_reg_geo && mvn clean package && mvn spring-boot:run",
    "cd fiber_reg_geo_frontend && npm run dev",
    "cd fiber_reg_frontend && npm run dev"
]

processes = []


for command in commands:
    p = subprocess.Popen([
        "konsole",
        "-e",
        "bash",
        "-c",
        command
    ])
    processes.append(p)

for p in processes:
    p.wait()