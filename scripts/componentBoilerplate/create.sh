# Permission fix: cd ./scripts/componentBoilerplate/ && chmod +x create.sh
# Argument 1 ComponentName

COMPONENT=$1
LOCATION="src/components";

if [ -z "$COMPONENT" ]; then
  echo "------------------------------------------------------------------------------------"
  echo "Creation of new component failed 😕. Please provide a Component Name as an argument."
  echo "------------------------------------------------------------------------------------"
else
  if mkdir "$LOCATION/$COMPONENT"; then
    cd "scripts/componentBoilerplate";

    cp "assets/Component.js.txt" "../../$LOCATION/$COMPONENT/$COMPONENT.js";
    cp "assets/Component.module.css.txt" "../../$LOCATION/$COMPONENT/$COMPONENT.module.css";
    cp "assets/Component.spec.js.txt" "../../$LOCATION/$COMPONENT/$COMPONENT.spec.js";
    cp "assets/Component.stories.mdx.txt" "../../$LOCATION/$COMPONENT/$COMPONENT.stories.mdx";
    cp "assets/Component.fixture.js.txt" "../../$LOCATION/$COMPONENT/$COMPONENT.fixture.js";
    cp "assets/index.js" "../../$LOCATION/$COMPONENT/index.js";

    cd "../../$LOCATION/$COMPONENT/";

    sed -i "" "s/ComponentBoilerplate/$COMPONENT/g" "$COMPONENT.js" "$COMPONENT.module.css" "$COMPONENT.spec.js" "$COMPONENT.stories.mdx" "$COMPONENT.fixture.js" "index.js";

    echo "-----------------------------------------------------------------------";
    echo "New component '$COMPONENT' created! 🎉 : $LOCATION/$COMPONENT";
    echo "-----------------------------------------------------------------------";
    ls;
    echo "-----------------------------------------------------------------------";

  else
    echo "-----------------------------------------------------"
    echo "Creation of new component "$COMPONENT" failed 😩"
    echo "-----------------------------------------------------"
  fi
fi
