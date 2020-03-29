yarn
npm run build-prod

if docker ps -a|grep -i peak-frontend_web;then
   docker stop peak-frontend_web
   echo '删除旧容器'
   docker rm -f peak-frontend_web
fi

npm run docker-prod
