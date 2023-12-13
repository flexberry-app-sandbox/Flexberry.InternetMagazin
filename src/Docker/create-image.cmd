docker build --no-cache -f SQL\Dockerfile.PostgreSql -t internet_magazin/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t internet_magazin/app ../..
